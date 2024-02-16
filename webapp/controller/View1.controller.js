sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageBox",
	"sap/m/MessageToast"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller, MessageBox) {
        "use strict";

        return Controller.extend("sap.calculadora.project1.controller.View1", {
            onInit: function () {

            },
            onClear: function () {
                debugger
                this.getView().byId("valor1").setValue("");
                this.getView().byId("valor2").setValue("");

            },
            onCalc: function() {
                debugger
                var valor1 = Number(this.getView().byId("valor1").getValue());
                var valor2 = Number(this.getView().byId("valor2").getValue());
                var operacao = this.getView().byId("select").getSelectedKey();
                var result;

                switch (operacao) {
                    case 'soma':
                        result = valor1 + valor2;
                        break;
                    case 'subtracao':
                        result = valor1 - valor2;
                        break;
                    case 'multiplicacao':
                        result = valor1*valor2;
                        break;
                    case 'divisao':
                        result = valor1/valor2;
                        break;
                }

                MessageBox.success("O valor calculado foi: "+result);
            }
        });
    });
