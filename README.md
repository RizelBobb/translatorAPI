# Translator (English to Russian) API
This was an in class assignment to integrate two public APIs. I found an API from ttp://strainapi.evanbusse.com, which listed information about marijuana types and Yandex Dictionary API. I found an API listing the effects of marijuana strains, and I used the dictionary to translate the effects to russian.

<img width="940" alt="apimarijuana" src="https://user-images.githubusercontent.com/22990146/37007295-9ce3e260-20aa-11e8-8832-bb0ab7b20a6e.PNG">

# How It's Made:
Tech used: HTML, CSS, JavaScript, AJAX/jQuery

(From bottom to top of my js file)I made a GET request with AJAX to retrieve objects from the marijuana api. This api listed out effects from different strains. I appended that to a list in my HTML. I made function call--named getTranslate(). I moved on to my second API, which concatenated the effect results I got from my first API to my second api. The end point for the dictionary API had a section for text that I wanted to translate, so I put the word effects there. I also made sure the endpoint specified that I was translating from engish to russian. I then found the translation within the object and appended the result to the HTML.

# Optimizations
I wish I could've styled this site better, but my main goal was really to figure out how I could make a more complex API than I have in the past.  

# Lessons Learned:
I learned to think outside the box and comb through very confusing API documentation. I had no clue how to combine these very random APIs, but this helped me think of how APIs could be combined. 
