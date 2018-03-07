import React from 'react';

const Instructions = () => {
    return (
        <div className="container">
            <br />
            <h1>Instructions</h1>
            <p>This is an app that you can really use while cooking, say bye to messing up your phone with food while you try to scroll down to follow the recipe</p>
            <p>You can search for cooking recipes with instructions using 4 different key ingredients: <strong>chicken</strong>, <strong>pasta</strong>, <strong>beef</strong> or <strong>fish</strong>. Using either the <strong>keyboard</strong> or <strong>voice commands</strong>. From then, select a recipe that you'd like to cook and get the list of ingredients and detailed instructions to cook that meal.</p>
            <p>If you see something that you'd like to try later, register and save any recipe in your own personal dashboard, as well as update the status on a recipe when you cook it or remove it entirely from your profile.</p>
            <h2>Disclaimer</h2>
            <p>This app uses your device's built-in mic to catch commands and ingredients and make your experience more enjoyble, so we may ask you to allow us the use of your mic, please click allow</p>
            <p>If you would like to stick to regular keyboard and mouse navigation, no worries. you can!</p>
            <h3>List of available voice commands</h3>
            <p>Voice commands are only available in the main screen, just <em>say</em> it</p>
            <div class="list-group">
                <a href="#" class="list-group-item list-group-item-action active bg-info">To search for recipes by ingredient:</a>
                <a href="#" class="list-group-item list-group-item-action">"Chicken"</a>
                <a href="#" class="list-group-item list-group-item-action">"Beef"</a>
                <a href="#" class="list-group-item list-group-item-action">"Fish"</a>
                <a href="#" class="list-group-item list-group-item-action disabled">"Pasta"</a>
            </div>
            <br />
            <div class="list-group">
                <a href="#" class="list-group-item list-group-item-action active bg-info">To scroll the page:</a>
                <a href="#" class="list-group-item list-group-item-action">"Scroll down"</a>
                <a href="#" class="list-group-item list-group-item-action">"Scroll up"</a>
            </div>
            <br />
            <div class="list-group">
                <a href="#" class="list-group-item list-group-item-action active bg-info">To open a specific recipe that you like, just say the number of the recipe</a>
                <a href="#" class="list-group-item list-group-item-action">"1"</a>
                <a href="#" class="list-group-item list-group-item-action">"2"</a>
                <a href="#" class="list-group-item list-group-item-action">"3"</a>
                <a href="#" class="list-group-item list-group-item-action">You get the idea...</a>
            </div>
            <br />
            <h3 className="text-center">Happy Cooking!!!</h3>
            <p className="text-right">Regards, <br /><em>Jean Paul</em></p>
        </div>
    );
}

export default Instructions;