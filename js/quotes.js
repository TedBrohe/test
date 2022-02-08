const quotes = [
    {quote : 'Be yourself; everyone else is already taken.'
        ,author :  'Oscar Wilde'
    },

    {quote : 'So many books, so little time'
        ,author :  'Frank Zappa'
    },

    {quote : 'A room without books is like a body without a soul.'
        ,author :  'Marcus Tullius Cicero'
    },

    {quote : 'You only live once, but if you do it right, once is enough.'
        ,author :  'Mae West'
    },

    {quote : 'Be the change that you wish to see in the world.'
        ,author :  'Mahatma Gandhi'
    },

    {quote : 'If you tell the truth, you don\'t have to remember anything.'
        ,author :  'Mark Twain'
    },

    {quote : 'A friend is someone who knows all about you and still loves you.'
        ,author :  'Elbert Hubbard'
    },

    {quote : 'Without music, life would be a mistake.'
        ,author :  'Friedrich Nietzsche'
    },

    {quote : 'It does not do to dwell on dreams and forget to live.'
        ,author :  'J.K. Rowling'
    },

    {quote : 'Life is what happens to us while we are making other plans.'
        ,author :  'Allen Saunders'
    },
]

// const quote = document.querySelector('#quotes div:first-child')
// const author = document.querySelector('#quotes div:last-child')

// function getQuote() {
//     num = Math.floor(Math.random() * quotes.length)
//     quote.innerText = quotes[num].quote; 
//     author.innerText = quotes[num].author;
// }

const quotes_div = document.querySelector('#quotes')

function getQuote() {
    num = Math.floor(Math.random() * quotes.length)
    
    const new_quote = document.createElement('div');
    new_quote.classList.add('quote');
    new_quote.innerText = quotes[num].quote; 
    quotes_div.appendChild(new_quote);

    const new_author = document.createElement('div');
    new_author.classList.add('author');
    new_author.innerText = quotes[num].author;
    quotes_div.appendChild(new_author);

    const oldquote = document.querySelectorAll(".quote")
    const oldauthor = document.querySelectorAll(".author")
    if (oldquote.length >= 2) {
        quotes_div.removeChild(oldquote[0]);
        quotes_div.removeChild(oldauthor[0]);
    }
}

getQuote();
setInterval(getQuote, 30000);


