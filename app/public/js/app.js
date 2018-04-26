$(document).ready(function() {
    var questions = ["Your mind is always buzzing with unexplored ideas and plans.",
        "Generally speaking, you rely more on your experience than your imagination.",
        "You find it easy to stay relaxed and focused even when there is some pressure.",
        "You rarely do something just out of sheer curiosity.",
        "People can rarely upset you.",
        "It is often difficult for you to relate to other people’s feelings.",
        "In a discussion, truth should be more important than people’s sensitivities.",
        "You rarely get carried away by fantasies and ideas.",
        "You think that everyone’s views should be respected regardless of whether they are supported by facts or not.",
        "You feel more energetic after spending time with a group of people."
    ]
    var scores = []
    for (var i = 1; i < questions.length + 1; i++) {
        var number = $('<h3><strong>Question ' + i + '</strong></h3>')
        var quest = $('<h4>' + questions[i - 1] + '</h4>')
        var options = $(`<select class="chosen-select` + i + `">
                                    <option selected>Select an option</option>
                                    <option value="1">One (Strongly Disagree)</option>
                                    <option value="2">Two</option>
                                    <option value="3">Three</option>
                                    <option value="4">Four</option>
                                    <option value="5">Five (Strongly Agree)</option>
                                </select>
            `)
        $('#question').append(number, quest, options)
    }
    $(".submit").on("click", function(event) {
        event.preventDefault();
        for (var i = 1; i < questions.length + 1; i++) {
            scores.push($(`.chosen-select` + i + ` option:selected`).val())
        }
        // Here we grab the form elements
        var newUser = {
            Name: $("#reserve-name").val().trim(),
            photo: $("#reserve-link").val().trim(),
            scores: scores
        };

        console.log(newUser);
        $.post("/api/friends", newUser);
    })
})