//People Modul
(function() {
    var people = ['KLaus', 'Alan'];

    //cache DOM
    var $el = $('#peopleModul');
    var $button = $el.find('.btn-add-person');
    var $input = $el.find('.input-text-person');
    var $wrapperPeople = $el.find('.wrapper-people');

    var template = $el.find('#people-template').html();
    console.log(template)
    console.log(people)
    console.log($button)
    console.log($input)
    console.log($wrapperPeople)
    console.log(template)

    //bindings
    $button.on('click', addPeople);
    $input.on('keydown', addPeopleWithEnter)
    $wrapperPeople.delegate('.btn-delete-person', 'click', deletePerson)

    render();

    function render() {
      $wrapperPeople.html('')
        var peopleArray = '';
        for (var i = 0; i < people.length; i++) {
            console.log(people[i]);
            var item = template;
            item = item.replace('{{name}}', people[i]);
            console.log(item);
            peopleArray = peopleArray + item
        };

        $wrapperPeople.append(peopleArray);
        setTimeout(function(){
          events.emit('peopleChanged', people)
        }, 0)
    };


    function addPeople() {
        console.log('btn cliked')
        people.push($input.val());
        $input.val('')
        console.log(people);
        render();
    };

    function addPeopleWithEnter(event) {
        if (event.keyCode == 13) {
            addPeople();
        };
    }

    function deletePerson(event) {
        var $remove = $(event.target).closest('.person');
        var i = $wrapperPeople.find('.person').index($remove);
        people.splice(i, 1);
        render();
    };
})()
