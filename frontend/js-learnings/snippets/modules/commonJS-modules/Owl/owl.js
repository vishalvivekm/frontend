module.exports = new class Owl {
    type = 'Bird';
    voice = 'Owoo';
    name = 'Hedwig'

    whoIs() {
        return this.type;
    };

    getVoice() {
        return this.voice;
    };

    getName() {
        return `My name is ${this.name}`;
    };
};