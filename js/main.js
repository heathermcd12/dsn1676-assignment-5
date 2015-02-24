var $form = $('form');
var $toDoList = $('#to-do-list'); //# because its an id..?
var $list = $('.list');
var $removeBtn = $('');
$form.on('submit', function (e) {
//Stop the form from doing what it normally does
  var $li = $('<li>');
  e.preventDefault();
  //$toDoList.val())
  $li.append($toDoList.val()) //in order for the todolist to add stuff to the li, you must add stuff from the li to the list
  $list.append($li) //value for this is not an input
  
  $li.on('click', function () {

       $li.remove(); 
    });
  
});

$removeBtn.on('click', function () {
  var offset = $circle.offset();

  $circle.css('left', offset.left + 40);              
});


