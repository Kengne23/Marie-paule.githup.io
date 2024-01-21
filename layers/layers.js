ol.proj.proj4.register(proj4);
ol.proj.get("EPSG:32633").setExtent([398546.505833, 705517.488367, 438561.359519, 732595.685710]);
var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_affleurement_de_Meiganga_1 = new ol.format.GeoJSON();
var features_affleurement_de_Meiganga_1 = format_affleurement_de_Meiganga_1.readFeatures(json_affleurement_de_Meiganga_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32633'});
var jsonSource_affleurement_de_Meiganga_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_affleurement_de_Meiganga_1.addFeatures(features_affleurement_de_Meiganga_1);
var lyr_affleurement_de_Meiganga_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_affleurement_de_Meiganga_1, 
                style: style_affleurement_de_Meiganga_1,
                interactive: true,
    title: 'affleurement_de_Meiganga<br />\
    <img src="styles/legend/affleurement_de_Meiganga_1_0.png" /> Roche Magmatique<br />\
    <img src="styles/legend/affleurement_de_Meiganga_1_1.png" /> Roche metamorphique<br />\
    <img src="styles/legend/affleurement_de_Meiganga_1_2.png" /> Roche Sedimentaire<br />'
        });

lyr_OSMStandard_0.setVisible(true);lyr_affleurement_de_Meiganga_1.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_affleurement_de_Meiganga_1];
lyr_affleurement_de_Meiganga_1.set('fieldAliases', {'Numéro de l\'affleurement': 'Numéro de l\'affleurement', 'Quartier': 'Quartier', 'latitude': 'latitude', 'longitude': 'longitude', 'altitude': 'altitude', 'precision': 'precision', 'Mode d\'affleurement': 'Mode d\'affleurement', 'Couleur de la patine d\'altération': 'Couleur de la patine d\'altération', 'Structure Géologique': 'Structure Géologique', 'Type de roche': 'Type de roche', 'Superficies en m²': 'Superficies en m²', 'Nom provisoire de la roche': 'Nom provisoire de la roche', 'Prendre une photo_URL': 'Prendre une photo_URL', 'field_14': 'field_14', });
lyr_affleurement_de_Meiganga_1.set('fieldImages', {'Numéro de l\'affleurement': 'Range', 'Quartier': 'TextEdit', 'latitude': 'TextEdit', 'longitude': 'TextEdit', 'altitude': 'TextEdit', 'precision': 'TextEdit', 'Mode d\'affleurement': 'TextEdit', 'Couleur de la patine d\'altération': 'TextEdit', 'Structure Géologique': 'TextEdit', 'Type de roche': 'TextEdit', 'Superficies en m²': 'TextEdit', 'Nom provisoire de la roche': 'TextEdit', 'Prendre une photo_URL': 'TextEdit', 'field_14': 'TextEdit', });
lyr_affleurement_de_Meiganga_1.set('fieldLabels', {'Numéro de l\'affleurement': 'no label', 'Quartier': 'no label', 'latitude': 'no label', 'longitude': 'no label', 'altitude': 'no label', 'precision': 'no label', 'Mode d\'affleurement': 'no label', 'Couleur de la patine d\'altération': 'no label', 'Structure Géologique': 'no label', 'Type de roche': 'no label', 'Superficies en m²': 'no label', 'Nom provisoire de la roche': 'no label', 'Prendre une photo_URL': 'no label', 'field_14': 'no label', });
lyr_affleurement_de_Meiganga_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});