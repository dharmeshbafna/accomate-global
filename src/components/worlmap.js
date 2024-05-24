import React from 'react';
import { MapsComponent, LayersDirective, LayerDirective, Inject, MapsTooltip } from '@syncfusion/ej2-react-maps';
import worldMapData from '../../public/world-map.json'; // Assuming the file is saved in public directory

const WorldMap = () => {
  return (
    <MapsComponent tooltipSettings={{ visible: true }}>
      <Inject services={[MapsTooltip]} />
      <LayersDirective>
        <LayerDirective
          shapeData={worldMapData}
          shapeSettings={{
            fill: '#E5E5E5',
            border: { color: '#B4B4B4', width: 0.5 },
          }}
          tooltipSettings={{
            visible: true,
            valuePath: 'name', // Assuming the property for country name is "name"
          }}
          dataSource={[]} // Removed this as tooltips work without additional data
          shapePropertyPath="name"
          shapeDataPath="name"
        >
        </LayerDirective>
      </LayersDirective>
    </MapsComponent>
  );
};

export default WorldMap;
