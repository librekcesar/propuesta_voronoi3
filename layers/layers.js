var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_propuesta_zonificacion_1 = new ol.format.GeoJSON();
var features_propuesta_zonificacion_1 = format_propuesta_zonificacion_1.readFeatures(json_propuesta_zonificacion_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_propuesta_zonificacion_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_propuesta_zonificacion_1.addFeatures(features_propuesta_zonificacion_1);
var lyr_propuesta_zonificacion_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_propuesta_zonificacion_1, 
                style: style_propuesta_zonificacion_1,
                interactive: true,
                title: '<img src="styles/legend/propuesta_zonificacion_1.png" /> propuesta_zonificacion'
            });
var format_poligon_voronoi_2 = new ol.format.GeoJSON();
var features_poligon_voronoi_2 = format_poligon_voronoi_2.readFeatures(json_poligon_voronoi_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_poligon_voronoi_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_poligon_voronoi_2.addFeatures(features_poligon_voronoi_2);
var lyr_poligon_voronoi_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_poligon_voronoi_2, 
                style: style_poligon_voronoi_2,
                interactive: true,
                title: '<img src="styles/legend/poligon_voronoi_2.png" /> poligon_voronoi'
            });
var format_estaciones_3 = new ol.format.GeoJSON();
var features_estaciones_3 = format_estaciones_3.readFeatures(json_estaciones_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_estaciones_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_estaciones_3.addFeatures(features_estaciones_3);
var lyr_estaciones_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_estaciones_3, 
                style: style_estaciones_3,
                interactive: true,
                title: '<img src="styles/legend/estaciones_3.png" /> estaciones'
            });
var format_centroides_4 = new ol.format.GeoJSON();
var features_centroides_4 = format_centroides_4.readFeatures(json_centroides_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_centroides_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_centroides_4.addFeatures(features_centroides_4);
var lyr_centroides_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_centroides_4, 
                style: style_centroides_4,
                interactive: true,
                title: '<img src="styles/legend/centroides_4.png" /> centroides'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_propuesta_zonificacion_1.setVisible(true);lyr_poligon_voronoi_2.setVisible(true);lyr_estaciones_3.setVisible(true);lyr_centroides_4.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_propuesta_zonificacion_1,lyr_poligon_voronoi_2,lyr_estaciones_3,lyr_centroides_4];
lyr_propuesta_zonificacion_1.set('fieldAliases', {'zipcode': 'zipcode', 'country': 'country', 'state': 'state', 'catstationid': 'catstationid', 'station_code': 'station_code', 'region': 'region', 'cluster_diferenciado': 'cluster_diferenciado', 'polygon': 'polygon', 'locality': 'locality', 'station_name': 'station_name', 'coverage_type': 'coverage_type', 'cobertura_diferenciada': 'cobertura_diferenciada', 'fid': 'fid', 'zonificacion': 'zonificacion', 'neighborhood': 'neighborhood', 'id': 'id', });
lyr_poligon_voronoi_2.set('fieldAliases', {'zonificacion_voronoi': 'zonificacion_voronoi', });
lyr_estaciones_3.set('fieldAliases', {'id': 'id', 'layer': 'layer', });
lyr_centroides_4.set('fieldAliases', {'station_code': 'station_code', });
lyr_propuesta_zonificacion_1.set('fieldImages', {'zipcode': 'TextEdit', 'country': 'TextEdit', 'state': 'TextEdit', 'catstationid': 'TextEdit', 'station_code': 'TextEdit', 'region': 'TextEdit', 'cluster_diferenciado': 'TextEdit', 'polygon': 'Range', 'locality': 'TextEdit', 'station_name': 'TextEdit', 'coverage_type': 'TextEdit', 'cobertura_diferenciada': 'TextEdit', 'fid': 'TextEdit', 'zonificacion': 'TextEdit', 'neighborhood': 'TextEdit', 'id': 'TextEdit', });
lyr_poligon_voronoi_2.set('fieldImages', {'zonificacion_voronoi': 'TextEdit', });
lyr_estaciones_3.set('fieldImages', {'id': 'Range', 'layer': 'TextEdit', });
lyr_centroides_4.set('fieldImages', {'station_code': 'TextEdit', });
lyr_propuesta_zonificacion_1.set('fieldLabels', {'zipcode': 'no label', 'country': 'no label', 'state': 'no label', 'catstationid': 'no label', 'station_code': 'no label', 'region': 'no label', 'cluster_diferenciado': 'no label', 'polygon': 'no label', 'locality': 'no label', 'station_name': 'no label', 'coverage_type': 'no label', 'cobertura_diferenciada': 'no label', 'fid': 'no label', 'zonificacion': 'no label', 'neighborhood': 'no label', 'id': 'no label', });
lyr_poligon_voronoi_2.set('fieldLabels', {'zonificacion_voronoi': 'header label', });
lyr_estaciones_3.set('fieldLabels', {'id': 'header label', 'layer': 'header label', });
lyr_centroides_4.set('fieldLabels', {'station_code': 'header label', });
lyr_centroides_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});