'use client';

import { dataProject } from '@/libs/data-project';
import { useState } from 'react';
import Title from '@/components/title';
import Description from '@/components/description';

export default function Project() {
  const [selected, setSelected] = useState(0);

  return (
    <div className="absolute z-10 w-full">
      <Title
        data={dataProject}
        setSelectedProject={setSelected}
      />
      <Description
        data={dataProject}
        selected={selected}
      />
    </div>
  );
}
