const mapData = [
    {
        src: 'maps/Image1.png',
        title: 'Global Shipping Traffic Density',
        alt: 'On the left: a map of Germany, showing the locations of all football clubs that ever played in Bundesliga. On the right: a horizontal bar chart with the top 18 clubs based on the total points gained: 1) Bayern München, 2) Borussia Dortmund, 3) Werder Bremen',
        description: 'Historical point tally of all the football clubs that have ever played in the Bundesliga. The map on the left shows all the clubs with their locations - partially shifted where there is a high density of clubs. Hovering over the location markers gives you a tooltip with the club\'s name and logo, as well as their total points and number of seasons in the Bundesliga. If the club is in the historical top 20, its corresponding bar in the chart on the right will be highlighted, too. Hovering over a bar in the table will highlight the corresponding point marker on the map.',
        
    },
    {
        src: 'maps/Image2.png',
        title: 'Day 02: Lines',
        alt: 'A basemap of the coast of Belgium with the track of the Kusttram as a line and the stops as points.',
        description: 'We thought we took the longest light rail public transport service in the world, turned out it was pushed into second place in 2023. 🚋 The Kusttram (engl. "Coast Tram") connects the cities and towns along the Belgian coast between De Panne (near the French border) and Knokke-Heist (Dutch Border). With 67 km, it\'s the second-longest light rail service worldwide. The interactive map is created with #Leaflet using the Alidade Smooth basemap from Stadia.',
        tools: {
            R: true,
            Figma: false,
            Datawrapper: false,
            QGIS: false,
            Observable: false,
        },
    },
    {
        src: 'maps/Image3.png',
        title: 'Day 03: Polygons',
        alt: 'A map of Cologne showing the walking duration to the next REWE supermarket using areas - called isochrones - with different colours. It shows the locations of 85 REWE supermarkets in Cologne. For a significant proportion of the area, the next supermarket is within 15 minutes walking distance. ',
        description: 'Why do you call it Cologne when it could also be REWE City? Cologne is the home to 85 REWE supermarkets and the company\'s headquarters. Each dot on the map shows the location of a supermarket. The coloured areas indicate how long it takes to get to the nearest REWE by foot. An isochrone is a boundary on a map that connects points reachable within the same amount of travel time from a specific location. It shows areas accessible in equal travel times. It\'s the first time I created such an isochrone map. I used R and the following key packages: 📌 tidygeocoder - to geocode the addresses of the REWE supermarkets;🚶‍♂️ osrm - to access the OSRM routing API and to calculate walking distances; 🛣 osmdata - to load the street data for the base map',
        tools: {
            R: true,
            Figma: false,
            Datawrapper: false,
            QGIS: false,
            Observable: false,
        },
    },
     {
        src: 'https://github.com/mdelorme-ch/Dataviz-Webinar-Series/blob/main/docs/gallery/maps/Video1.mp4?raw=true',
        title: 'Global Shipping Traffic Density',
        alt: 'On the left: a map of Germany, showing the locations of all football clubs that ever played in Bundesliga. On the right: a horizontal bar chart with the top 18 clubs based on the total points gained: 1) Bayern München, 2) Borussia Dortmund, 3) Werder Bremen',
        description: 'Historical point tally of all the football clubs that have ever played in the Bundesliga. The map on the left shows all the clubs with their locations - partially shifted where there is a high density of clubs. Hovering over the location markers gives you a tooltip with the club\'s name and logo, as well as their total points and number of seasons in the Bundesliga. If the club is in the historical top 20, its corresponding bar in the chart on the right will be highlighted, too. Hovering over a bar in the table will highlight the corresponding point marker on the map.',
        
    },
];
