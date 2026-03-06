"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Bhaskara = void 0;
class Bhaskara {
    constructor(a, b, c) {
        this.a = a;
        this.b = b;
        this.c = c;
    }
    calcular() {
        const delta = (this.b * this.b) - (4 * this.a * this.c);
        if (delta < 0) {
            return "Não existem raízes reais";
        }
        const x1 = (-this.b + Math.sqrt(delta)) / (2 * this.a);
        const x2 = (-this.b - Math.sqrt(delta)) / (2 * this.a);
        return `x1 = ${x1} | x2 = ${x2}`;
    }
}
exports.Bhaskara = Bhaskara;
