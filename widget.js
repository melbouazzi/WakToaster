WAF.define('WakToaster', ['waf-core/widget'], function(widget) {
	
    var WakToaster = widget.create('WakToaster', {
        init: function() {
//            /* Define a custom event */
//            this.fire('myEvent', {
//                message: 'Hello'
//            });
		     	    
		 	/*this.render();
		    
		    this.toastrType.onChange(this.render); 
		    this.title.onChange(this.render);
			this.message.onChange(this.render);
			this.position.onChange(this.render);
			this.timeOut.onChange(this.render);
			this.showDuration.onChange(this.render);
			this.hideDuration.onChange(this.render);
			this.closeButton.onChange(this.render);*/
        }
        ,
        
//        /* Create a property */

		title: widget.property({
			type: "string", 
			bindable: false
		})

		,

		message: widget.property({
			type: "string",
			bindable: false
		})
		
		,
        
        closeButton: widget.property({
        	type:"boolean",
        	bindable: false,
        	defaultValue: false
        })
        
        ,
        
        toastrType: widget.property({
            type: "enum",
            values: {
            	success: 'Success',
            	info: 'Info',
            	warning:'Warning',
            	error:'Error'
            },
            bindable: false   
        })
       
        ,
       
        position: widget.property({
        	type: "enum",
            values: {
            	toast_top_right: 'Top right',
            	toast_bottom_right: 'Bottom right',
            	toast_bottom_left:'Bottom left',
            	toast_top_left:'Top left',
            	toast_top_full_width:'Top full width',
            	toast_bottom_full_width:'Bottom full width'
            },
            bindable: false   
        })
       
        ,
       
        timeOut: widget.property({
        	type:"integer",
        	bindable: false,
        	defaultValue: 5000
        })
       
        ,
       
        hideDuration: widget.property({
        	type: "integer",
        	bindable: false,
        	defaultValue: 1000
        })
       
        ,
       
        showDuration: widget.property({
        	type: "integer",
        	bindable: false,
        	defaultValue: 300
        })
    
    	/*,
    	
    	render: function() {
           var toastrType = this.toastrType();
           var title = this.title() == '' ? 'title' : this.title();
           var message = this.message() == '' ? '' : this.message();
           var position = this.position().replace('_','-').replace('_','-').replace('_','-'); // replace '_' by '-' ( positionClass: toast-bottom-full-width )
           var options = {
				"closeButton": this.closeButton(),
				"debug": false,
				"positionClass": position,
				"onclick": null,
				"showDuration": this.showDuration(),
				"hideDuration": this.hideDuration(),
				"timeOut": this.timeOut(),
				"extendedTimeOut": "1000",
				"showEasing": "swing",
				"hideEasing": "linear",
				"showMethod": "fadeIn",
				"hideMethod": "fadeOut"
			};
			
           toastr[toastrType](message, title, options);
        }*/
		,
        
        show: function(){
           var type = this.toastrType();
           var title = this.title() == '' ? 'title' : this.title();
           var message = this.message() == '' ? '' : this.message();
           var position = this.position().replace('_','-').replace('_','-').replace('_','-'); // replace '_' by '-' ( positionClass: toast-bottom-full-width )
           var options = {
				"closeButton": this.closeButton(),
				"debug": false,
				"positionClass": position,
				"onclick": null,
				"showDuration": this.showDuration(),
				"hideDuration": this.hideDuration(),
				"timeOut": this.timeOut(),
				"extendedTimeOut": "1000",
				"showEasing": "swing",
				"hideEasing": "linear",
				"showMethod": "fadeIn",
				"hideMethod": "fadeOut"
			};
			
           toastr[type](message, title, options);
        }
        
    });

//    /* Map the custom event above to the DOM click event */
//    WakToaster.mapDomEvents({
//        'click': 'action'
//    });

    return WakToaster;

});

/* For more information, refer to http://doc.wakanda.org/Wakanda0.DevBranch/help/Title/en/page3871.html */
