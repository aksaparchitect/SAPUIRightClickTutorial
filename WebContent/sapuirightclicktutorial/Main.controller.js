sap.ui.localResources("controls");
jQuery.sap.require("controls.SAPUILink");
sap.ui.controller("sapuirightclicktutorial.Main", {

/**
* Called when a controller is instantiated and its View controls (if available) are already created.
* Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
* @memberOf sapuirightclicktutorial.Main
*/
//	onInit: function() {
//
//	},

/**
* Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
* (NOT before the first rendering! onInit() is used for that one!).
* @memberOf sapuirightclicktutorial.Main
*/
//	onBeforeRendering: function() {
//
//	},

/**
* Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
* This hook is the same one that SAPUI5 controls get after being rendered.
* @memberOf sapuirightclicktutorial.Main
*/
//	onAfterRendering: function() {
//
//	},

/**
* Called when the Controller is destroyed. Use this one to free resources and finalize activities.
* @memberOf sapuirightclicktutorial.Main
*/
//	onExit: function() {
//
//	}
	testPress:function(){
		window.redirect("www.sapui.eu");
	},
	rightPress:function(evt){
		//basic menu
		var oMenu11 = new sap.ui.commons.Menu("menu1-1", {ariaDescription: "File Menu", tooltip: "Menu containing file related actions"});
		var oMenuItem13 = new sap.ui.commons.MenuItem("item1-1-3",{text: "Add sales order"});
		oMenu11.addItem(oMenuItem13);
		var oMenuItem14 = new sap.ui.commons.MenuItem("item1-1-4",{text: "A/R invoice"});
		oMenu11.addItem(oMenuItem14);
		
		var eDock = sap.ui.core.Popup.Dock;
		oMenu11.open(false,
				evt.oSource.getFocusDomRef(),
				eDock.BeginTop,
				eDock.BeginBottom,
				evt.oSource.getDomRef());
	}
});