// WM 2026 Website - Hauptanwendung

class WMWebsite {
    constructor() {
        this.allGames = games;
        this.favorites = this.loadFavorites();
        this.settings = this.loadSettings();
        this.filteredGames = [...this.allGames];
        
        this.init();
    }

    init() {
        this.setupEventListeners();
        this.applySettings();
        this.renderGames();
        this.updateFavoritesCount();
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

        // Settings button
        document.getElementById('settingsBtn').addEventListener('click', () => {
            this.openSettings();
        });

        // Settings modal
        const modal = document.getElementById('settingsModal');
        document.querySelector('.close-btn').addEventListener('click', () => {
            this.closeSettings();
        });

        window.addEventListener('click', (e) => {
            if (e.target === modal) {
                this.closeSettings();
            }
        });

        // Color settings
        document.getElementById('bgColor').addEventListener('change', (e) => {
            this.updateSetting('bgColor', e.target.value);
        });

        document.getElementById('cardColor').addEventListener('change', (e) => {
            this.updateSetting('cardColor', e.target.value);
        });

        document.getElementById('headerColor').addEventListener('change', (e) => {
            this.updateSetting('headerColor', e.target.value);
        });

        document.getElementById('textColor').addEventListener('change', (e) => {
            this.updateSetting('textColor', e.target.value);
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
                const stadium = stadiums[game.stadium]?.toLowerCase() || '';
                const date = game.date;

                return (
                    team1Name.includes(term) ||
                    team2Name.includes(term) ||
                    stadium.includes(term) ||
                    date.includes(term) ||
                    game.stage.toLowerCase().includes(term)
                );
            });
        }

        this.renderGames();
    }

    toggleFavoritesView() {
        const gamesSection = document.getElementById('gamesSection');
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

    openSettings() {
        document.getElementById('settingsModal').classList.add('active');
        // Update input values from settings
        document.getElementById('bgColor').value = this.settings.bgColor;
        document.getElementById('cardColor').value = this.settings.cardColor;
        document.getElementById('headerColor').value = this.settings.headerColor;
        document.getElementById('textColor').value = this.settings.textColor;
    }

    closeSettings() {
        document.getElementById('settingsModal').classList.remove('active');
    }

    updateSetting(key, value) {
        this.settings[key] = value;
        this.saveSettings();
        this.applySettings();
    }

    applySettings() {
        document.documentElement.style.setProperty('--bg-color', this.settings.bgColor);
        document.documentElement.style.setProperty('--card-color', this.settings.cardColor);
        document.documentElement.style.setProperty('--header-color', this.settings.headerColor);
        document.documentElement.style.setProperty('--text-color', this.settings.textColor);
    }

    resetSettings() {
        this.settings = {
            bgColor: '#f0f0f0',
            cardColor: '#ffffff',
            headerColor: '#1e3a8a',
            textColor: '#000000'
        };
        this.saveSettings();
        this.applySettings();
        this.openSettings();
    }

    saveSettings() {
        localStorage.setItem('wmSettings', JSON.stringify(this.settings));
    }

    loadSettings() {
        const saved = localStorage.getItem('wmSettings');
        return saved ? JSON.parse(saved) : {
            bgColor: '#f0f0f0',
            cardColor: '#ffffff',
            headerColor: '#1e3a8a',
            textColor: '#000000'
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
    }

    createGameCard(game) {
        const team1 = teams[game.team1];
        const team2 = teams[game.team2];
        const stadium = stadiums[game.stadium] || game.stadium;
        const isFavorited = this.favorites.find(g => g.id === game.id);

        const dateObj = new Date(game.date);
        const formattedDate = dateObj.toLocaleDateString('de-DE', {
            weekday: 'short',
            year: 'numeric',
            month: '2-digit',
            day: '2-digit'
        });

        return `
            <div class="game-card ${isFavorited ? 'favorited' : ''}">
                <button class="favorite-btn ${isFavorited ? 'active' : ''}" data-game-id="${game.id}" title="Zu Favoriten hinzufügen">
                    ${isFavorited ? '❤️' : '🤍'}
                </button>

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
                            <span>${stadium}</span>
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