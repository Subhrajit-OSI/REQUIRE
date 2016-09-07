define([
	'jquery',
	'underscore',
	'backbone'
], function($, _, Backbone){
    //Initialize Form 1 View
    var ViewsFactoryForm1 = Backbone.View.extend({
        el: $('#content'),
        render: function(){
            $("h1").text("Form 1");
            var template = _.template($("#tpl-form1").html(),{});
            this.$el.html(template);
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

    return ViewsFactoryForm1;
});
