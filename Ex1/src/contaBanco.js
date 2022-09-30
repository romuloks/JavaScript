"use strict";
exports.__esModule = true;
exports.contaBanco = void 0;
var contaBanco = /** @class */ (function () {
    function contaBanco(titular, agencia, conta, saldo) {
        this.titular = titular;
        this.agencia = agencia;
        this.conta = conta;
        this.saldo = saldo;
    }
    contaBanco.prototype.verSaldo = function () {
        console.log("o saldo da sua conta \u00E9 ".concat(this.saldo));
    };
    contaBanco.prototype.sacar = function (valor) {
        if (valor > 0 && valor <= this.saldo) {
            this.saldo -= valor;
            console.log("saque de R$ ".concat(valor, "saquer realizado com sucessor"));
        }
        else {
            console.log("saque de R$ ".concat(valor, "impossivel realizar o saquer"));
        }
    };
    contaBanco.prototype.deposito = function (valor) {
        if (valor > 0) {
            this.saldo += valor;
            console.log("deposito de R$ ".concat(valor, "deposito realizado com sucessor"));
        }
        else {
            console.log("deposito de R$ ".concat(valor, "impossivel realizar o deposito"));
        }
    };
    return contaBanco;
}());
exports.contaBanco = contaBanco;
