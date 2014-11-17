sap.ui.commons.Link.extend("controls.SAPUILink",{
	metadata:{
		events:{
			"rightPress":{}
		}
	},
	oncontextmenu : function(evt){
		this.fireRightPress();
	},
	renderer:{}
});