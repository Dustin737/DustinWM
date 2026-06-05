// WM 2026 Website - Hauptanwendung

class WMWebsite {
    constructor() {
        this.allGames = games;
        this.favorites = this.loadFavorites();
        this.predictions = this.loadPredictions();
        this.settings = this.loadSettings();
        this.filteredGames = [...this.allGames];
        
        this.init();
    }

    init() {
        this.setupEventListeners();
        this.applySettings();
        this.renderGames();
        this.updateFavoritesCount();
        this.updatePredictionsCount();
    }

    setupEventListeners() {
        // Search functionality
        document.getElementById('searchInput').addEventListener('input', (e) => {
            this.filterGames(e.target.value);
        });

        // Favorites button
        document.getElementById('favoritesBtn').addEventListener('click', () => {
            this.toggleFavoritesView();
        });

        // Predictions button
        document.getElementById('predictionsBtn').addEventListener('click', () => {
            this.openPredictions();
        });

        // Settings button
        document.getElementById('settingsBtn').addEventListener('click', () => {
            this.openSettings();
        });

        // Settings modal close
        const settingsModal = document.getElementById('settingsModal');
        const settingsCloseBtn = document.getElementById('settingsCloseBtn');
        settingsCloseBtn.addEventListener('click', () => {
            this.closeSettings();
        });

        window.addEventListener('click', (e) => {
            if (e.target === settingsModal) {
                this.closeSettings();
            }
        });

        // Predictions modal close
        const predictionsModal = document.getElementById('predictionsModal');
        const predictionsCloseBtn = document.getElementById('predictionsCloseBtn');
        predictionsCloseBtn.addEventListener('click', () => {
            this.closePredictions();
        });

        window.addEventListener('click', (e) => {
            if (e.target === predictionsModal) {
                this.closePredictions();
            }
        });

        // Settings sections toggle
        document.querySelectorAll('.settings-toggle').forEach(toggle => {
            toggle.addEventListener('click', () => {
                const section = toggle.dataset.section;
                const content = document.getElementById(section);
                const arrow = toggle.querySelector('.toggle-arrow');
                
                content.style.display = content.style.display === 'none' ? 'block' : 'none';
                arrow.style.transform = arrow.style.transform === 'rotate(180deg)' ? 'rotate(0deg)' : 'rotate(180deg)';
            });
        });

        // Color settings
        document.querySelectorAll('input[name="bgColor"]').forEach(input => {
            input.addEventListener('change', (e) => {
                this.updateSetting('bgColor', e.target.value);
            });
        });

        document.querySelectorAll('input[name="cardColor"]').forEach(input => {
            input.addEventListener('change', (e) => {
                this.updateSetting('cardColor', e.target.value);
            });
        });

        document.querySelectorAll('input[name="headerColor"]').forEach(input => {
            input.addEventListener('change', (e) => {
                this.updateSetting('headerColor', e.target.value);
            });
        });

        document.querySelectorAll('input[name="textColor"]').forEach(input => {
            input.addEventListener('change', (e) => {
                this.updateSetting('textColor', e.target.value);
            });
        });

        // Reset settings button
        document.getElementById('resetSettingsBtn').addEventListener('click', () => {
            this.resetSettings();
        });
    }

    filterGames(searchTerm) {
        const term = searchTerm.toLowerCase().trim();

        if (!term) {
            this.filteredGames = [...this.allGames];
        } else {
            this.filteredGames = this.allGames.filter(game => {
                const team1Name = teams[game.team1]?.name.toLowerCase() || '';
                const team2Name = teams[game.team2]?.name.toLowerCase() || '';
                const stadium = stadiums[game.stadium]?.name.toLowerCase() || '';
                const city = stadiums[game.stadium]?.city.toLowerCase() || '';
                const date = game.date;

                return (
                    team1Name.includes(term) ||
                    team2Name.includes(term) ||
                    stadium.includes(term) ||
                    city.includes(term) ||
                    date.includes(term) ||
                    game.stage.toLowerCase().includes(term)
                );
            });
        }

        this.renderGames();
    }

    toggleFavoritesView() {
        const sectionTitle = document.getElementById('sectionTitle');
        const searchInput = document.getElementById('searchInput');

        if (this.filteredGames === this.favorites && this.favorites.length > 0) {
            // Back to all games
            this.filteredGames = [...this.allGames];
            sectionTitle.textContent = 'Alle Spiele';
            searchInput.style.opacity = '1';
            searchInput.style.pointerEvents = 'auto';
        } else {
            // Show favorites
            if (this.favorites.length === 0) {
                alert('Du hast noch keine Favoriten hinzugefügt!');
                return;
            }
            this.filteredGames = this.favorites;
            sectionTitle.textContent = '❤️ Meine Favoriten';
            searchInput.style.opacity = '0.5';
            searchInput.style.pointerEvents = 'none';
        }

        this.renderGames();
    }

    addFavorite(gameId) {
        const game = this.allGames.find(g => g.id === gameId);
        if (game && !this.favorites.find(g => g.id === gameId)) {
            this.favorites.push(game);
            this.saveFavorites();
            this.updateFavoritesCount();
            this.renderGames();
        }
    }

    removeFavorite(gameId) {
        this.favorites = this.favorites.filter(g => g.id !== gameId);
        this.saveFavorites();
        this.updateFavoritesCount();
        this.renderGames();
    }

    toggleFavorite(gameId) {
        if (this.favorites.find(g => g.id === gameId)) {
            this.removeFavorite(gameId);
        } else {
            this.addFavorite(gameId);
        }
    }

    updateFavoritesCount() {
        document.getElementById('favoritesCount').textContent = this.favorites.length;
    }

    saveFavorites() {
        localStorage.setItem('wmFavorites', JSON.stringify(this.favorites));
    }

    loadFavorites() {
        const saved = localStorage.getItem('wmFavorites');
        return saved ? JSON.parse(saved) : [];
    }

    // Predictions System
    addPrediction(gameId, team1Score, team2Score) {
        const game = this.allGames.find(g => g.id === gameId);
        if (game) {
            this.predictions[gameId] = {
                team1Score: parseInt(team1Score) || 0,
                team2Score: parseInt(team2Score) || 0
            };
            this.savePredictions();
            this.updatePredictionsCount();
            this.renderGames();
        }
    }

    removePrediction(gameId) {
        delete this.predictions[gameId];
        this.savePredictions();
        this.updatePredictionsCount();
        this.renderGames();
        this.renderPredictions();
    }

    updatePredictionsCount() {
        document.getElementById('predictionsCount').textContent = Object.keys(this.predictions).length;
    }

    savePredictions() {
        localStorage.setItem('wmPredictions', JSON.stringify(this.predictions));
    }

    loadPredictions() {
        const saved = localStorage.getItem('wmPredictions');
        return saved ? JSON.parse(saved) : {};
    }

    openPredictions() {
        document.getElementById('predictionsModal').classList.add('active');
        this.renderPredictions();
    }

    closePredictions() {
        document.getElementById('predictionsModal').classList.remove('active');
    }

    renderPredictions() {
        const container = document.getElementById('predictionsContainer');
        
        if (Object.keys(this.predictions).length === 0) {
            container.innerHTML = '<p style="text-align: center; padding: 2rem; color: #999;">Noch keine Vorhersagen hinzugefügt. 🎯</p>';
            return;
        }

        const predictionsHTML = Object.keys(this.predictions).map(gameId => {
            const game = this.allGames.find(g => g.id === parseInt(gameId));
            if (!game) return '';

            const team1 = teams[game.team1];
            const team2 = teams[game.team2];
            const pred = this.predictions[gameId];

            return `
                <div class="prediction-item">
                    <div class="prediction-game">
                        <span>${team1.flag} ${team1.name}</span>
                        <span class="prediction-score">${pred.team1Score} : ${pred.team2Score}</span>
                        <span>${team2.flag} ${team2.name}</span>
                    </div>
                    <button class="delete-prediction" data-game-id="${gameId}">🗑️</button>
                </div>
            `;
        }).join('');

        container.innerHTML = predictionsHTML;

        document.querySelectorAll('.delete-prediction').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const gameId = btn.dataset.gameId;
                this.removePrediction(gameId);
            });
        });
    }

    openSettings() {
        document.getElementById('settingsModal').classList.add('active');
        this.updateSettingsUI();
    }

    closeSettings() {
        document.getElementById('settingsModal').classList.remove('active');
    }

    updateSettingsUI() {
        // Update color radios
        document.querySelectorAll('input[type="radio"]').forEach(input => {
            input.checked = false;
        });

        document.getElementById(`bg-${this.settings.bgColor}`)?.click();
        document.getElementById(`card-${this.settings.cardColor}`)?.click();
        document.getElementById(`header-${this.settings.headerColor}`)?.click();
        document.getElementById(`text-${this.settings.textColor}`)?.click();
    }

    updateSetting(key, value) {
        this.settings[key] = value;
        this.saveSettings();
        this.applySettings();
    }

    applySettings() {
        const colorMap = {
            'white': '#ffffff',
            'black': '#000000',
            'red': '#ff0000',
            'yellow': '#ffff00',
            'blue': '#0000ff',
            'gray': '#808080',
            'purple': '#800080',
            'green': '#008000',
            'lightgreen': '#90ee90',
            'darkgreen': '#006400',
            'lightblue': '#add8e6',
            'darkblue': '#00008b',
            'gold': '#ffd700',
            'lightgray': '#d3d3d3',
            'navy': '#000080',
            'teal': '#008080',
            'germanyBg': 'linear-gradient(to bottom, #000 0%, #000 33%, #D00 33%, #D00 66%, #FFCE00 66%, #FFCE00 100%)'
        };

        const bgColor = colorMap[this.settings.bgColor] || '#ffffff';
        const cardColor = colorMap[this.settings.cardColor] || '#ffffff';
        const headerColor = colorMap[this.settings.headerColor] || '#00008b';
        const textColor = colorMap[this.settings.textColor] || '#000000';

        document.documentElement.style.setProperty('--bg-color', bgColor);
        document.documentElement.style.setProperty('--card-color', cardColor);
        document.documentElement.style.setProperty('--header-color', headerColor);
        document.documentElement.style.setProperty('--text-color', textColor);
    }

    resetSettings() {
        this.settings = {
            bgColor: 'white',
            cardColor: 'white',
            headerColor: 'darkblue',
            textColor: 'black'
        };
        this.saveSettings();
        this.applySettings();
        this.updateSettingsUI();
    }

    saveSettings() {
        localStorage.setItem('wmSettings', JSON.stringify(this.settings));
    }

    loadSettings() {
        const saved = localStorage.getItem('wmSettings');
        return saved ? JSON.parse(saved) : {
            bgColor: 'white',
            cardColor: 'white',
            headerColor: 'darkblue',
            textColor: 'black'
        };
    }

    renderGames() {
        const gamesGrid = document.getElementById('gamesGrid');
        const noResults = document.getElementById('noResults');

        if (this.filteredGames.length === 0) {
            gamesGrid.innerHTML = '';
            noResults.style.display = 'block';
            return;
        }

        noResults.style.display = 'none';
        gamesGrid.innerHTML = this.filteredGames.map(game => this.createGameCard(game)).join('');

        // Add event listeners to favorite buttons
        document.querySelectorAll('.favorite-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.preventDefault();
                const gameId = parseInt(btn.dataset.gameId);
                this.toggleFavorite(gameId);
            });
        });

        // Add event listeners to prediction buttons
        document.querySelectorAll('.prediction-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.preventDefault();
                const gameId = parseInt(btn.dataset.gameId);
                const team1Score = prompt('Tore Team 1:', this.predictions[gameId]?.team1Score || '0');
                if (team1Score !== null) {
                    const team2Score = prompt('Tore Team 2:', this.predictions[gameId]?.team2Score || '0');
                    if (team2Score !== null) {
                        this.addPrediction(gameId, team1Score, team2Score);
                    }
                }
            });
        });
    }

    createGameCard(game) {
        const team1 = teams[game.team1];
        const team2 = teams[game.team2];
        const stadium = stadiums[game.stadium];
        const stadiumText = stadium ? `${stadium.name}, ${stadium.city}` : game.stadium;
        const isFavorited = this.favorites.find(g => g.id === game.id);
        const hasPrediction = this.predictions[game.id];

        const dateObj = new Date(game.date);
        const formattedDate = dateObj.toLocaleDateString('de-DE', {
            weekday: 'short',
            year: 'numeric',
            month: '2-digit',
            day: '2-digit'
        });

        return `
            <div class="game-card ${isFavorited ? 'favorited' : ''} ${hasPrediction ? 'has-prediction' : ''}">
                <div class="card-buttons">
                    <button class="favorite-btn ${isFavorited ? 'active' : ''}" data-game-id="${game.id}" title="Zu Favoriten hinzufügen">
                        ${isFavorited ? '❤️' : '🤍'}
                    </button>
                    <button class="prediction-btn ${hasPrediction ? 'active' : ''}" data-game-id="${game.id}" title="Vorhersage hinzufügen">
                        🎯
                    </button>
                </div>

                <div class="game-info">
                    <span class="stage">${game.stage}${game.group ? ` - Gruppe ${game.group}` : ''}</span>

                    <div class="teams">
                        <div class="team">
                            <div class="team-flag">${team1.flag}</div>
                            <div class="team-name">${team1.name}</div>
                        </div>
                        <div class="vs">vs</div>
                        <div class="team">
                            <div class="team-flag">${team2.flag}</div>
                            <div class="team-name">${team2.name}</div>
                        </div>
                    </div>

                    ${hasPrediction ? `
                        <div class="prediction-display">
                            <strong>🎯 Deine Vorhersage:</strong>
                            <div>${this.predictions[game.id].team1Score} : ${this.predictions[game.id].team2Score}</div>
                        </div>
                    ` : ''}

                    <div class="details">
                        <div class="detail-item">
                            <strong>📅 Datum</strong>
                            <span>${formattedDate}</span>
                        </div>
                        <div class="detail-item">
                            <strong>⏰ Uhrzeit</strong>
                            <span>${game.time} Uhr</span>
                        </div>
                        <div class="detail-item" style="grid-column: 1 / -1;">
                            <strong>📍 Stadion</strong>
                            <span>${stadiumText}</span>
                        </div>
                    </div>
                </div>
            </div>
        `;
    }
}

// Anwendung starten, wenn das DOM geladen ist
document.addEventListener('DOMContentLoaded', () => {
    new WMWebsite();
});
