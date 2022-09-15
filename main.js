$('form').on('submit', function(e) {
    e.preventDefault()
    addRating($('#movie').val(), $('#stars').val())
})

$('#ratings').on('dblclick', function(e) {
    e.target.parentNode.remove()
})

function addRating(movie, stars) {
    let rating = ""
    for(let i = 1; i <= 10; i++) {
        if(i <= stars) {
            rating += "&#128150;"
        } else {
            rating += "&#128420;"
        }
    }

    $('#ratings').append($('<div>').append($('<p>').html(movie + ": " + rating)))
}

