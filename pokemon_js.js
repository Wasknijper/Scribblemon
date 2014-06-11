/*global confirm , prompt , alert , window , math , document, console, setTimeout, localStorage, atob, btoa, setInterval*/

window.onload = function() {
    'use strict';

    //object constuctor function, uitgelegd door Joost Faber in de les Programmeren.
    //Hiermee kan ik gemakkelijk nieuwe pokémon aanmaken.
    var Pokemon = function (name, type, lvl, baseHp, evolve, evolveName, evolveLvl, exp) {
            this.name = name;
            this.type = type;
            this.lvl = lvl;
            this.baseHp = baseHp;
            this.evolve = evolve;
            this.evolveName = evolveName;
            this.evolveLvl = evolveLvl;
            this.exp = exp;
        },

        Place = function (name, lvl, pokemon, baseExp) {
            this.name = name;
            this.lvl = lvl;
            this.pokemon = pokemon;
            this.baseExp = baseExp;
        },

    //starter pokemon
        bulbasaur = new Pokemon('Bulbasaur', 'Grass', 1, 45, true, "Ivysaur", 16, 0),
        squirtle = new Pokemon('Squirtle', 'Water', 1, 44, true, "Wartortle", 0, 0),
        charmander = new Pokemon('Charmander', 'Fire', 1, 39, true, "Charmeleon", 0, 0),
        //ivysaur = new Pokemon('Ivysaur', 'Grass', 1, 45, true, "Venusaur", 32, 0),
        //venusaur = new Pokemon('Venusaur', 'Grass', 1, 45, false, 0, 0),
        //charmeleon = new Pokemon('Charizard', "Fire", 1, )
        //charizard

        //forest pokemon
        caterpie = new Pokemon('Caterpie', 'Bug', 1, 45, true, "Methapod", 0, 0),
        weedle = new Pokemon('Weedle', 'Bug', 1, 40, true, "Kakuna", 0, 0),
        pidgey = new Pokemon('Pidgey', 'Flying', 1, 40, true, "Pidgeotto", 0, 0),
        paras = new Pokemon('Paras', 'Bug', 1, 35, true, "Parasect", 0, 0),
        pichu = new Pokemon('Pichu', 'Electric', 1, 20, true, "Pikachu", 0, 0),

        //lake pokemon
        magikarp = new Pokemon('Magikarp', 'Water', 1, 20, true, "Gyrados", 0, 0),
        poliwag = new Pokemon('Poliwag', 'Water', 1, 40, true, "Poliwhirl", 0, 0),
        slowpoke = new Pokemon('Slowpoke', 'Water', 1, 90, true,  "Slowbro", 0, 0),
        shellder = new Pokemon('Shellder', 'Water', 1, 30, true, "Cloyster", 0, 0),
        krabby = new Pokemon('Krabby', 'Water', 1, 30, true, "Kingler", 0, 0),

        //desert pokemon
        ekans = new Pokemon('Ekans', "Poison", 1, 35, true, "Arbok", 0, 0),
        sandshrew = new Pokemon('Sandshrew', 'Ground', 1, 50, true, "Sandslash", 0, 0),
        diglett = new Pokemon('Diglett', 'Ground', 1, 10, true, "Dugtrio", 0, 0),
        cubone = new Pokemon('Cubone', 'Ground', 1, 50, true, "Marowak", 0, 0),
        doduo = new Pokemon('Doduo', 'Flying', 1, 35, true, "Dodrio", 0, 0),

        //field pokemon
        nidoranF = new Pokemon('Nidoran F', 'Poison', 1, 55, true, "Nidorina", 0, 0),
        nidoranM = new Pokemon('Nidoran M', 'Poison', 1, 46, true, "Nidorino", 0, 0),
        oddish = new Pokemon('Oddish', 'Grass', 1, 45, true, "Gloom", 0, 0),
        bellsprout = new Pokemon('Bellsprout', 'Grass', 1, 50, true, "Weepinbell", 0, 0),
        tauros = new Pokemon('Tauros', 'Normal', 1, 75, false, "", 0, 0),

        //waterfall cave pokemon
        horsea = new Pokemon('Horsea', 'Water', 1, 30, true, 'Seadra', 0, 0),
        goldeen = new Pokemon('Goldeen', 'Water', 1, 45, true, 'Seaking', 0, 0),
        seel = new Pokemon('Seel', 'Water', 1, 65, true, 'Dewgong', 0, 0),
        psyduck = new Pokemon('Psyduck', 'Water', 1, 50, true, 'Golduck', 0, 0),
        staryu = new Pokemon('Staryu', 'Water', 1, 30, true, 'Starmie', 0, 0),

        //jungle pokemon
        lickitung = new Pokemon('Lickitung', 'Normal', 1, 90, false, "", 0, 0),
        scyther = new Pokemon('Scyther', 'Grass', 1, 70, true, "Scizor", 0, 0),
        venonat = new Pokemon('Venonat', 'Bug', 1, 60, true, "Venomoth", 0, 0),
        exeggcute = new Pokemon('Exeggcute', 'Grass', 1, 60, true, "Exeggutor", 0, 0),
        tangela = new Pokemon('Tangela', 'Grass', 1, 65, true, "Tangrowth", 0, 0),

        //spooky tower pokemon
        gastly = new Pokemon('Gastly', 'Ghost', 1, 30, true, "Haunter", 0, 0),
        drowzee = new Pokemon('Drowzee', "Psychic", 1, 60, true, "Hypno", 0, 0),
        mrmime = new Pokemon('Mr Mime', "Psychic", 1, 40, false, "", 0, 0),
        jynx = new Pokemon('Jynx', 'Psychic', 1, 65, false, "", 0, 0),
        koffing = new Pokemon('Koffing', 'Poison', 1, 40, true, 'Weezing', 0, 0),

        //mysterious cave
        clefairy = new Pokemon('Clefairy', 'Fairy', 1, 70, true, 'Clefable', 0, 0),
        jigglypuff = new Pokemon('jigglypuff', 'Normal', 1, 115, true, 'Wigglytuff', 0, 0),
        dratini = new Pokemon('Dratini', 'Dragon', 1, 41, true, 'Dragonair', 0, 0),
        zubat = new Pokemon('Zubat', 'Poison', 1, 40, true, 'Golbat', 0, 0),
        abra = new Pokemon('Abra', 'Psychic', 1, 25, true, 'Kadabra', 0, 0),

        //dojo
        mankey = new Pokemon('Mankey', 'Fighting', 1, 40, true, 'Primeape', 0, 0),
        machop = new Pokemon('Machop', 'Fighting', 1, 70, true, 'Machoke', 0, 0),
        hitmonchan = new Pokemon('Hitmonchan', 'Fighting', 1, 50, false, "", 0, 0),
        hitmonlee = new Pokemon('Hitmonlee', 'Fighting', 1, 50, false, "", 0, 0),
        chansey = new Pokemon('Chansey', 'Normal', 1, 250, true, 'Blissey', 0, 0),

        //powerplant
        pikachu = new Pokemon('Pikachu', "Electric", 1, 35, true, 'Raichu', 0, 0),
        magnemite = new Pokemon('Magnemite', 'Electric', 1, 25, true, 'Magneton', 0, 0),
        voltorb = new Pokemon('Voltorb', 'Electric', 1, 40, true, 'Electrode', 0, 0),
        electabuzz = new Pokemon('Electabuzz', 'Electric', 1, 65, true, 'Electivire', 0, 0),
        jolteon = new Pokemon('Jolteon', 'Electric', 1, 65, false, "", 0, 0),

        //volcano
        flareon = new Pokemon('Flareon', 'Fire', 1, 65, false, "", 0, 0),
        vulpix = new Pokemon('Vulpix', 'Fire', 1, 38, true, 'Ninetales', 0, 0),
        growlithe = new Pokemon('Growlithe', 'Fire', 1, 55, true, 'Arcanine', 0, 0),
        magmar = new Pokemon('Magmar', 'Fire', 1, 65, true, 'Magmotar', 0, 0),
        ponyta = new Pokemon('Ponyta', 'Fire', 1, 50, true, 'Rapidash', 0, 0),

        //plekken, pokemon die je hier tegen kunt komen worden in een array gestopt, 5 pokémon per plek.
        forest = new Place('Forest', 1, [caterpie, weedle, pidgey, paras, pichu], 45),
        lake = new Place('Lake', 4, [magikarp, poliwag, slowpoke, shellder, krabby], 45),
        desert = new Place('Desert', 8, [ekans, sandshrew, diglett, cubone, doduo], 80),
        field = new Place('Field', 15, [nidoranM, nidoranF, oddish, bellsprout, tauros], 130),
        waterfallcave = new Place('Waterfall Cave', 22, [horsea, goldeen, psyduck, seel, staryu], 240),
        jungle = new Place('Jungle', 30, [lickitung, scyther, venonat, exeggcute, tangela], 360),
        spookytower = new Place('Spooky Tower', 40, [gastly, drowzee, mrmime, jynx, koffing], 550),
        dojo = new Place('Dojo', 50, [mankey, machop, hitmonlee, hitmonchan, chansey], 730),
        mysticalcave = new Place('Mystical Cave', 57, [clefairy, jigglypuff, dratini, zubat, abra], 860),
        powerplant = new Place('Powerplant', 65, [pikachu, magnemite, voltorb, electabuzz, jolteon], 1000),
        volcano = new Place('Volcano', 80, [flareon, vulpix, growlithe, magmar, ponyta], 1500),

        // een array aan voor de plekken
        places = [forest, lake, desert, field, waterfallcave, jungle, spookytower, dojo, mysticalcave, powerplant, volcano],
        starters = [bulbasaur, charmander, squirtle],

        //leeg object om straks makkelijk op te kunnen slaan
        userChoices = {
            Pokemon: {},
            Place: {}
        },

        //calculeer exp nodig per lvl, formule voor exp: 1.25(Current Level + 1)^3. 
        //http://www.serebii.net/games/exp.shtml, formule voor de "slow" group
        expNextLvl = function(lvl) {
            var result;
            if (userChoices.Pokemon.lvl < 100) {
                result = userChoices.Pokemon.exp = Math.floor(1.25 * Math.pow(lvl + 1, 3));
            } else {
                result = "None, max lvl";
            }
            return result;
        },

        //bron van gedeeltelijke formule: http://bulbapedia.bulbagarden.net/wiki/Experience#Gain_formula
        expGained = function(baseExp, lvl) {
            return Math.floor(baseExp * lvl / 7);
        },

        //functie om sneller het Id van een element 
        getId = function (id) {
            return document.getElementById(id);
        },

        overlay = getId('overlay'),

        textOverlay = getId("textOverlay"),

        h1Overlay,

        pOverlay,

        i = 0,

        div,

        img,

        p,
    //vind de hp bar, de max en de value. Bron voor progressbar element: http://stackoverflow.com/questions/20277052/how-to-make-a-health-bar 
        hp = getId("hp_bar"),
        hpValue,
        hpMax,

    // vind de messages balk
        messages = getId("messages"),

    //Object voor het opslaan van variabelen van de gebruikers keuze
        targetPokemon,

    //haal de unordered list op uit het docuemnt
        ulPlaces = getId("places_list"),

        newRow,


        //functie om een nieuwe target pokemon aan te roepen
        newPokemon = function() {
            //gebruik math.random om een willekeurige pokemon uit de array te kiezen
            targetPokemon = userChoices.Place.pokemon[Math.floor(Math.random() * userChoices.Place.pokemon.length)];
            //calculeer hoeveel hp de volgende pokemon heeft bron: http://pokemondb.net/pokebase/19109/what-is-the-formula-for-pokemon-hp
            // ({[IV+2*Base Stat+([EVs]/4)+100] * Level}/100)+10
            hpValue = hpMax = Math.floor((((Math.random() * 31) + 2 * targetPokemon.baseHp + (Math.random() * 120) / 4) * userChoices.Place.lvl) / 60 + 10 + Math.random() * userChoices.Place.lvl * (Math.random() * 10));
            //wijs de max en value to aan de HTML elementen
            hp.max = hpMax;
            hp.value = hpValue;
            //had een probleem met innerText in Firefox, vervangen door innerHTML, bron: http://stackoverflow.com/questions/1359469/innertext-works-in-ie-but-not-in-firefox
            getId('target_pokemon').innerHTML = targetPokemon.name;
            getId("target_pokemon_img").src = "img/" + targetPokemon.name.replace(/\s+/g, '-').toLowerCase() + ".png";
        },

        pickPlace = function() {
            var i = 0, idname, li, p;
            function checkLvlAndPlace() {
                    //declareer clickedLi met de value id van de geklikte li zodat je deze kan gebruiken in de if-else
                    //bron for nodeValue: http://www.w3schools.com/dom/prop_document_nodevalue.asp
                    //Eval geeft een error in JSLint, maar ik gebruik het toch omdat als een 3e partij in het spelletje vals wilt spelen ze dat zelf maar moeten weten
                var clickedLi = eval(this.getAttribute('id')),
                    result;
                if (userChoices.Pokemon.lvl >= clickedLi.lvl) {
                    result = userChoices.Place = clickedLi;
                    newPokemon();
                    getId('location').innerHTML = userChoices.Place.name;
                    messages.innerHTML = "You and " + userChoices.Pokemon.name + " go to the " + clickedLi.name + ".";
                } else {
                    messages.innerHTML = "Your " + userChoices.Pokemon.name + " needs to be level " + clickedLi.lvl + " to train at the " + clickedLi.name + ".";
                    return result;
                }
            }
            //laat de lijst met plekken zien. Bron: For loops uit Codecademy Loops, en W3Schools For Loops
            for (i = 0; i < places.length; i += 1) {
                //maak een nieuw list item aan
                li = document.createElement("li");
                p = document.createElement("p");
                //http://stackoverflow.com/questions/9422974/createelement-with-id
                idname = places[i].name.replace(/\s+/g, '');
                idname.replace(/\s/g, "-");
                li.setAttribute("id", idname.replace(/\s+/g, '-').toLowerCase());

                ulPlaces.appendChild(li);
                li.innerHTML = "<span>" + places[i].name + "</span>";
                li.appendChild(p);
                p.innerHTML = "Req. Lvl: " + places[i].lvl;

                //voeg een eventListener toe
                //http://stackoverflow.com/questions/9565831/how-to-get-id-of-an-element-whose-name-is-known-in-javascript
                li.addEventListener("click", checkLvlAndPlace);//afsluiting event listener
            }// afsluiting for loop
        },

    //functie om de html-waarde te updaten
        updateLvlEnExp = function(exp, lvl) {
            getId('chosen_pokemon_lvl').innerHTML = lvl;
            if (userChoices.Pokemon.lvl < 100) {
                getId('exp_needed').innerHTML = exp;
            } else {
                getId('exp_needed').innerHTML = "None, max lvl!";
            }
        },

        expCounter = getId('exp_needed'),

        save = function(totesSaved) {
            localStorage.yourSave = btoa(totesSaved);
            //console.log(localStorage['yourSave']);
        };

    function updatePokemonEnLocation() {
        updateLvlEnExp(userChoices.Pokemon.exp, userChoices.Pokemon.lvl);
        getId('location').innerHTML = userChoices.Place.name;
        getId("chosen_pokemon_img").src = "img/" + userChoices.Pokemon.name.replace(/\s+/g, '-').toLowerCase() + ".png";
        getId('chosen_pokemon').innerHTML = userChoices.Pokemon.name;
    }

        //yay, saving
    function autoSave() {
        save(JSON.stringify(userChoices));
        messages.innerHTML = "Your game has been auto-saved!";
    }
    //elke minut een een save

    //de save button
    getId('saveBtn').addEventListener("click", function() {
        save(JSON.stringify(userChoices));
        messages.innerHTML = "Your game has been saved!";
    });

    //local storage leeg maken
    getId('wipeSave').addEventListener("click", function() {
        var confirmWipe = confirm("Warning: You are about to completely remove your save, this cannot be undone.\nAre you sure you want to delete your save?");
        if (confirmWipe === true) {
            localStorage.clear();
            window.location.reload();
        }
    });

    //save coderen en zichtbaar maken zodat ze deze ergens kunnen bewaren
    getId('exportSave').addEventListener("click", function() {
        prompt("Copy the text and store it somewhere to keep your save safe.", localStorage.getItem('yourSave'));
    });

    //voor als ze de gexporteerde save willen exporteren
    getId('importSave').addEventListener("click", function() {
        //gebruik een prompt om te vragen wat de export save code is
        var userInput = prompt("Paste your export save code here:"),
            decodedSave;
        //controleer of de igevoerde code een save is voor het spel, dit doe ik door te check of wat gedecodeerd is een Pokemon én een Place property heeft
        //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/hasOwnProperty
        //try en catch http://www.w3schools.com/js/js_errors.asp, gevonden op http://stackoverflow.com/a/3710226
        try {
            //decodeer de code
            decodedSave = JSON.parse(atob(userInput));
             //als de save beide properties heeft, dan zetten we die in userChoices en updaten we de pokemon, 
            userChoices = decodedSave;
            updatePokemonEnLocation();
            newPokemon();
            //save gelijk zodat localStorage gelijk goed staat
            save(JSON.stringify(userChoices));
        } catch (e) {
            alert("The code you enter doesnt seem to be a valid save, please try again.");
        }

    });

    function setStarter() {
        var clickedImg = eval(this.getAttribute('id'));
        userChoices.Pokemon = clickedImg;
        userChoices.Place = forest;
        console.log(userChoices.Pokemon);
        userChoices.Pokemon.exp = expNextLvl(userChoices.Pokemon.lvl);

        updatePokemonEnLocation();
        newPokemon();
        pickPlace();
        setInterval(autoSave, 60000);
        if (userChoices.Pokemon === starters[0] || userChoices.Pokemon === starters[1] || userChoices.Pokemon === starters[2]) {
            overlay.setAttribute('class', 'hidden');
        }
    }

    //voor het beginnen eerst kijken of er al een save bestaat
    //http://stackoverflow.com/questions/3262605/html5-localstorage-check-if-item-isset
    if (localStorage.getItem('yourSave') === null) {
        //vullen de overlay
        overlay.removeAttribute('class');
        h1Overlay = document.createElement("h1");
        pOverlay = document.createElement("p");
        newRow = document.createElement("div");

        for (i; i < starters.length; i += 1) {
            div = document.createElement('div');
            div.setAttribute('class', 'col-sm-4');

            img = document.createElement('img');
            img.src = "img/" + starters[i].name.toLowerCase() + ".png";
            img.setAttribute('id', starters[i].name.toLowerCase());

            p = document.createElement('p');
            p.innerHTML = starters[i].name;
            p.setAttribute('id', starters[i].name.toLowerCase());
            p.setAttribute('class', 'push');

            div.appendChild(p);
            div.appendChild(img);

            newRow.appendChild(div);

            img.addEventListener('click', setStarter);

        }

        //content in de nieuwe elementen zetten
        h1Overlay.innerHTML = "Welcome to Scribblemon!";
        pOverlay.innerHTML = "To start your scribbly journey, you need to pick a starter Pokémon!";


        textOverlay.appendChild(h1Overlay);
        textOverlay.appendChild(pOverlay);
        textOverlay.appendChild(newRow);

    } else {
        //https://github.com/CMDA/programmeren/blob/master/hoorcollege7/script2.js
        //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Base64_encoding_and_decoding
        userChoices = JSON.parse(atob(localStorage.getItem("yourSave")));
        updatePokemonEnLocation();
        newPokemon();
        pickPlace();
        setInterval(autoSave, 60000);
    }

    function train() {
            //reken uit hoeveel schade jouw pokemon aanricht, minium dmg is level gedeeld door 2 en maximum is level kerer 1.2
            //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
        var max = userChoices.Pokemon.lvl * 1.3,
            min = userChoices.Pokemon.lvl / 2 + 1,
            damage = Math.floor(Math.random() * (max - min) + min);
        console.log(damage);
        //animmeer de pokemon en het target, bron: http://stackoverflow.com/questions/12866385/start-css-animations-javascript
        getId('chosen_pokemon_img').setAttribute("class", "attack");
        setTimeout(function() {getId('target_pokemon_img').setAttribute("class", "hit"); }, 100);

        if (hpValue - damage <= 0) {
            //trek de gekregen exp af van de huidige exp
            hp.value = hpValue;
            userChoices.Pokemon.exp -= expGained(userChoices.Place.baseExp, userChoices.Place.lvl);
            //console.log(expGained(userChoices.Place.baseExp, userChoices.Place.lvl));
            //verwijder de animaties nadat deze zijn afgelopen
            setTimeout(function() {getId('chosen_pokemon_img').removeAttribute("class"); }, 400);
            setTimeout(function() {getId('target_pokemon_img').removeAttribute("class"); }, 500);

            if (userChoices.Pokemon.exp <= 0 && userChoices.Pokemon.lvl < 100) {
                userChoices.Pokemon.lvl = userChoices.Pokemon.lvl + 1;
                //Pokemon exp en lvl updaten, Pokemon exp eerst appart aanroepen zodat direct de nieuwe hoeveelheid verschijnt.
                userChoices.Pokemon.exp = expNextLvl(userChoices.Pokemon.lvl);
                //sla automatisch op
                save(JSON.stringify(userChoices));
                //wijd de nieuwe variabelen toe zodat het juiste lvl en exp er komt te staan.
                updateLvlEnExp(userChoices.Pokemon.exp, userChoices.Pokemon.lvl);
                messages.innerHTML = "Congrats! Your " + userChoices.Pokemon.name + " gained a level! Current level: " + userChoices.Pokemon.lvl;
                newPokemon();
            } else if (userChoices.Pokemon.lvl >= 100) {
                expCounter.innerHTML = "None, max lvl!";
                messages.innerHTML = "The wild " + targetPokemon.name + " fainted!";
                newPokemon();
            } else {
                messages.innerHTML = "The wild " + targetPokemon.name + " fainted!";
                updateLvlEnExp(userChoices.Pokemon.exp, userChoices.Pokemon.lvl);
                newPokemon();
            }

        } else {
            //haal de schade van de hp af
            hpValue -= damage;

            //wijs de nieuwe value toe aan het html document
            hp.value = hpValue;

            //verwijder de animaties nadat deze zijn afgelopen
            setTimeout(function() {getId('chosen_pokemon_img').removeAttribute("class"); }, 400);
            setTimeout(function() {getId('target_pokemon_img').removeAttribute("class"); }, 500);
        }
    }

    getId('train_button').addEventListener("click", train);

};//window.onload
