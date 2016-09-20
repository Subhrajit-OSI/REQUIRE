define([
	'jquery',
	'underscore',
	'backbone',
    'handlebars'
], function($, _, Backbone, Handlebars){

    //Initialize Form 1 View
    var ViewsFactoryForm1 = Backbone.View.extend({
        el: $('#content'),
        render: function(){
            var source      = $('#tpl-form1').html();
            var template    = Handlebars.compile(source);
            var html        = template({heading:"Form 1"});
            this.$el.html(html);
            this.$el.find("#fname").focus();
            this.delegateEvents();
            return this;
        },
        events: {
            'click a#nextpage': 'save'
        },
        save: function(e) {
            app.firstname = this.$el.find("#fname").val();
            app.lastname = this.$el.find("#lname").val();

            if(!app.firstname)
                this.$el.find("#fname").focus();
            else if(!app.lastname)
                this.$el.find("#lname").focus();

            if(!app.firstname || !app.lastname)
                e.preventDefault();
        }
    });

    //Return Form 1 View Object
    return ViewsFactoryForm1;
});
