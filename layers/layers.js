var wms_layers = [];
var format_MANZANAS_0 = new ol.format.GeoJSON();
var features_MANZANAS_0 = format_MANZANAS_0.readFeatures(json_MANZANAS_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MANZANAS_0 = new ol.source.Vector({
    attributions: '<a href=""></a>',
});
jsonSource_MANZANAS_0.addFeatures(features_MANZANAS_0);var lyr_MANZANAS_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_MANZANAS_0, 
                style: style_MANZANAS_0,
                title: '<img src="styles/legend/MANZANAS_0.png" /> MANZANAS'
            });var format_VIALIDADINTERCOMISARIAS_1 = new ol.format.GeoJSON();
var features_VIALIDADINTERCOMISARIAS_1 = format_VIALIDADINTERCOMISARIAS_1.readFeatures(json_VIALIDADINTERCOMISARIAS_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_VIALIDADINTERCOMISARIAS_1 = new ol.source.Vector({
    attributions: '<a href=""></a>',
});
jsonSource_VIALIDADINTERCOMISARIAS_1.addFeatures(features_VIALIDADINTERCOMISARIAS_1);var lyr_VIALIDADINTERCOMISARIAS_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_VIALIDADINTERCOMISARIAS_1, 
                style: style_VIALIDADINTERCOMISARIAS_1,
                title: '<img src="styles/legend/VIALIDADINTERCOMISARIAS_1.png" /> VIALIDAD INTERCOMISARIAS'
            });var format_VIALIDADREGIONAL_2 = new ol.format.GeoJSON();
var features_VIALIDADREGIONAL_2 = format_VIALIDADREGIONAL_2.readFeatures(json_VIALIDADREGIONAL_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_VIALIDADREGIONAL_2 = new ol.source.Vector({
    attributions: '<a href=""></a>',
});
jsonSource_VIALIDADREGIONAL_2.addFeatures(features_VIALIDADREGIONAL_2);var lyr_VIALIDADREGIONAL_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_VIALIDADREGIONAL_2, 
                style: style_VIALIDADREGIONAL_2,
                title: '<img src="styles/legend/VIALIDADREGIONAL_2.png" /> VIALIDAD REGIONAL'
            });var format_VIALIDADESPRINCIPALESDECIUDAD_3 = new ol.format.GeoJSON();
var features_VIALIDADESPRINCIPALESDECIUDAD_3 = format_VIALIDADESPRINCIPALESDECIUDAD_3.readFeatures(json_VIALIDADESPRINCIPALESDECIUDAD_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_VIALIDADESPRINCIPALESDECIUDAD_3 = new ol.source.Vector({
    attributions: '<a href=""></a>',
});
jsonSource_VIALIDADESPRINCIPALESDECIUDAD_3.addFeatures(features_VIALIDADESPRINCIPALESDECIUDAD_3);var lyr_VIALIDADESPRINCIPALESDECIUDAD_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_VIALIDADESPRINCIPALESDECIUDAD_3, 
                style: style_VIALIDADESPRINCIPALESDECIUDAD_3,
                title: '<img src="styles/legend/VIALIDADESPRINCIPALESDECIUDAD_3.png" /> VIALIDADES PRINCIPALES DE CIUDAD'
            });var format_LOCALIDADESPUNTOS_4 = new ol.format.GeoJSON();
var features_LOCALIDADESPUNTOS_4 = format_LOCALIDADESPUNTOS_4.readFeatures(json_LOCALIDADESPUNTOS_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LOCALIDADESPUNTOS_4 = new ol.source.Vector({
    attributions: '<a href=""></a>',
});
jsonSource_LOCALIDADESPUNTOS_4.addFeatures(features_LOCALIDADESPUNTOS_4);var lyr_LOCALIDADESPUNTOS_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_LOCALIDADESPUNTOS_4, 
                style: style_LOCALIDADESPUNTOS_4,
                title: '<img src="styles/legend/LOCALIDADESPUNTOS_4.png" /> LOCALIDADES  PUNTOS'
            });var format_limitedistrito_5 = new ol.format.GeoJSON();
var features_limitedistrito_5 = format_limitedistrito_5.readFeatures(json_limitedistrito_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_limitedistrito_5 = new ol.source.Vector({
    attributions: '<a href=""></a>',
});
jsonSource_limitedistrito_5.addFeatures(features_limitedistrito_5);var lyr_limitedistrito_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_limitedistrito_5, 
                style: style_limitedistrito_5,
                title: '<img src="styles/legend/limitedistrito_5.png" /> limite distrito'
            });

lyr_MANZANAS_0.setVisible(true);lyr_VIALIDADINTERCOMISARIAS_1.setVisible(true);lyr_VIALIDADREGIONAL_2.setVisible(true);lyr_VIALIDADESPRINCIPALESDECIUDAD_3.setVisible(true);lyr_LOCALIDADESPUNTOS_4.setVisible(true);lyr_limitedistrito_5.setVisible(true);
var layersList = [lyr_MANZANAS_0,lyr_VIALIDADINTERCOMISARIAS_1,lyr_VIALIDADREGIONAL_2,lyr_VIALIDADESPRINCIPALESDECIUDAD_3,lyr_LOCALIDADESPUNTOS_4,lyr_limitedistrito_5];
lyr_MANZANAS_0.set('fieldAliases', {'Id': 'Id', });
lyr_VIALIDADINTERCOMISARIAS_1.set('fieldAliases', {'ZID': 'ZID', 'NAME': 'NAME', 'ELEV': 'ELEV', 'ICON': 'ICON', });
lyr_VIALIDADREGIONAL_2.set('fieldAliases', {'ZID': 'ZID', 'NAME': 'NAME', 'ELEV': 'ELEV', 'ICON': 'ICON', });
lyr_VIALIDADESPRINCIPALESDECIUDAD_3.set('fieldAliases', {'Id': 'Id', 'VIALIDADES': 'VIALIDADES', });
lyr_LOCALIDADESPUNTOS_4.set('fieldAliases', {'NOMBRE': 'NOMBRE', });
lyr_limitedistrito_5.set('fieldAliases', {'Entity': 'Entity', 'Layer': 'Layer', 'DISTRITO': 'DISTRITO', });
lyr_MANZANAS_0.set('fieldImages', {'Id': 'Range', });
lyr_VIALIDADINTERCOMISARIAS_1.set('fieldImages', {'ZID': '', 'NAME': '', 'ELEV': '', 'ICON': '', });
lyr_VIALIDADREGIONAL_2.set('fieldImages', {'ZID': '', 'NAME': '', 'ELEV': '', 'ICON': '', });
lyr_VIALIDADESPRINCIPALESDECIUDAD_3.set('fieldImages', {'Id': '', 'VIALIDADES': '', });
lyr_LOCALIDADESPUNTOS_4.set('fieldImages', {'NOMBRE': '', });
lyr_limitedistrito_5.set('fieldImages', {'Entity': '', 'Layer': '', 'DISTRITO': '', });
lyr_MANZANAS_0.set('fieldLabels', {'Id': 'no label', });
lyr_VIALIDADINTERCOMISARIAS_1.set('fieldLabels', {'ZID': 'no label', 'NAME': 'header label', 'ELEV': 'no label', 'ICON': 'no label', });
lyr_VIALIDADREGIONAL_2.set('fieldLabels', {'ZID': 'no label', 'NAME': 'no label', 'ELEV': 'no label', 'ICON': 'no label', });
lyr_VIALIDADESPRINCIPALESDECIUDAD_3.set('fieldLabels', {'Id': 'no label', 'VIALIDADES': 'no label', });
lyr_LOCALIDADESPUNTOS_4.set('fieldLabels', {'NOMBRE': 'no label', });
lyr_limitedistrito_5.set('fieldLabels', {'Entity': 'no label', 'Layer': 'no label', 'DISTRITO': 'no label', });
lyr_limitedistrito_5.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});