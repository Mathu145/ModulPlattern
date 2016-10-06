//stats
(function() {
    var counterPeople = 0;

    //cache DOM

    var $el = $('#statsModul')
    var template = $el.find('#stats-template').html();
    console.log(template);


    //bind events
    events.on('peopleChanged', countPeople)


    render()

    function render() {
        var item = template;
        item = item.replace('{{zahl}}', counterPeople);
        $el.html(item);
    };

    function countPeople(people) {
        counterPeople = people.length;
        render()
    }

})()
