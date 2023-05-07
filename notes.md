# Notes from sources 
## Audio Elements
HTML audio element used to embed sound content in documents. Can contain more than one audio source. 

## Attributes of Audio Elements
`autoplay`: A boolean attribute that plays audio automatically as soon as it can w/o waiting for whole audio file to be finished downloading. (think streaming).

`controls`: Browser will give controls to user to control volume, playback, seeking, pause/unpause.

`loop`: Boolean attritbute that will have the audio player loop back to the beginning at the end.

`muted`: Boolean value to determine if audio is initially muted.

## From Lab:
`document.getElementById`(“id-of-your-element”): Links to an external site.
Returns an html element reference that contains an id attribute that matches the string you passed in

`document.getElementsByClassName`(“class-of-your-elements”)Links to an external site.
Returns a list of element references where each element contains a class attribute that matches the string passed in

`document.querySelector`("css-selector")Links to an external site.
A very powerful way to use this is to use the attribute selector you used in the CSS lab "['attributeName'='attributeValue']".
EX: document.querySelector("[type='radio']") will select an element like <input type="radio"/>
A pretty diverse selector that selects an element in the same way that you select an element in css. For example passing in "#cool-thing" will select an element with the id "cool-thing".

## Event Listeners:
"In order to define an event listener, you must bind it to an HTML element that is present in your markup... The common syntax for general event handling is as follows: 
``` 
htmlElement.addEventListener(‘event type’, function() {

  // code to run when the event is triggered

})"

