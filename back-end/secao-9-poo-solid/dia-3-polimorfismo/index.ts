class Students {
    constructor(public matricula: number,
        public nome: string,
        public nota1: number,
        public nota2: number,
        public nota3: number,
        public nota4: number,
        public trabalho1: number,
        public trabalho2: number,
        ) { }
    
    sumNotas() {
        const sum = this.nota1 + this.nota2 + this.nota3 + this.nota4;

        return sum;
    }

    media() {
        const sum = this.sumNotas();
        const media = sum / 4;
        return media
    }
}