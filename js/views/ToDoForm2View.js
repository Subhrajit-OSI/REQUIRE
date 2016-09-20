define([
	'jquery',
	'underscore',
	'backbone',
    'handlebars',
	'../collections/ToDoCollection'
], function($, _, Backbone, Handlebars, ProjectCollection){

    //Initialize Form 2 View
	var ViewsFactoryForm2 = Backbone.View.extend({
		el: $('#content'),
        initialize: function() {
            this.ProjectCollectionObj = new ProjectCollection();
        },
		render: function(){

            var source      = $('#tpl-form2').html();
            var template    = Handlebars.compile(source);
            var html        = template({heading:"Form 2"});
            this.$el.html(html);
            this.$el.find("#addOne").focus();
            this.delegateEvents();
            return this;
		},
        events: {
            'click a#complete': 'save'
        },
        save: function(e) {
            var address_1 = this.$el.find("#addOne").val();
            if(!address_1){
                this.$el.find("#addOne").focus();
                e.preventDefault();
            }
            if(app.firstname && app.lastname && address_1){
                this.ProjectCollectionObj.add({firstname:app.firstname,lastname:app.lastname,address1:this.$el.find("#addOne").val(),address2:this.$el.find("#addTwo").val(),city:this.$el.find("#city").val(),state:this.$el.find("#state").val(),zipcode:this.$el.find("#zipcode").val()});
                displayCollectionContents("Data - ",this.ProjectCollectionObj);
                app.firstname =''; app.lastname='';
            }
        }
	});

    //Return Form 2 View Object
	return ViewsFactoryForm2;
});