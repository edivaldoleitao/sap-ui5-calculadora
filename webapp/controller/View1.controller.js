sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageBox",
	"sap/m/MessageToast"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller) {
        "use strict";

        return Controller.extend("sap.calculadora.project1.controller.View1", {
            onInit: function () {

            },
            onClear: function () {

            },
            onCalc: function() {
                var valor1 = Number(this.getView().byId("valor1").getValue());
                var valor2 = Number(this.getView().byId("valor2").getValue());
                var operacao = this.getView().byId("select").getSelectedKey();
                var result;

                switch (operacao) {
                    case '+':
                        result = valor1 + valor2;
                        break;
                    case '-':
                        result = valor1 - valor2;
                        break;
                    case '*':
                        result = valor1*valor2;
                        break;
                    case '/':
                        result = valor1/valor2;
                        break;
                }

                MessageBox.success("O valor calculado foi: "+ result);
            }
        });
    });
