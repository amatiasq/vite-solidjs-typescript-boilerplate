import * as d3 from 'd3';
import { createEffect } from 'solid-js';
import { GraphNode } from './data';

// const drag = (x: d3.Selection<SVGCircleElement, GraphNode, null, unknown>) => {
//   function dragged(event: DragEvent, d: any) {
//     x
//       .raise()
//       .attr('cx', (d.x = event.x))
//       .attr('cy', (d.y = event.y));
//   }

//   return d3
//     .drag()
//     .on('start', () => x.attr('stroke', 'black'))
//     .on('end', () => x.attr('stroke', null))
//     .on('drag', dragged)
// };

const drag = createDrag();

const radius = 25;

export function Graph(props: { data: GraphNode[] }) {
  const container = <svg />;

  createEffect(() => {
    const { data } = props;

    const svg = d3
      .select(container as any as string)
      .attr('viewBox', [0, 0, window.innerWidth, window.innerHeight]);

    svg
      .selectAll('circle')
      .data(data)
      .enter()
      .append('circle')
      .attr('fill', 'white')
      .attr('cx', (d, i) => i * 80 + 50)
      .attr('cy', 150)
      .attr('r', radius)
      // .on('click', clicked)
      .call(drag);

    svg
      .selectAll('text')
      .data(data)
      .enter()
      .append('text')
      .attr('text-anchor', 'middle')
      .attr('fill', 'black')
      .attr('font-size', 12)
      .attr('x', (d, i) => i * 80 + 50)
      .attr('y', 155)
      .text((d) => d.name);
  });

  return container;

  // const canvas = ref<HTMLCanvasElement>();
  // return <canvas ref={canvas}></canvas>;

  function clicked(this: SVGCircleElement, event: MouseEvent, d: GraphNode) {
    if (event.defaultPrevented) return; // dragged

    const self = d3.select(this);

    self
      .transition()
      .attr('r', () => +self.attr('r') * 2)
      .transition()
      .attr('r', radius);
  }
}

/*

generate D3.js code to render nodes contai

*/

function createDrag() {
  function dragstarted(this: Element, event: DragEvent, d: any) {
    d3.select(this).raise().attr('stroke', 'black');
  }

  function dragged(this: Element, event: DragEvent, d: any) {
    d3.select(this)
      .attr('cx', (d.x = event.x))
      .attr('cy', (d.y = event.y));
  }

  function dragended(this: Element, event: DragEvent, d: any) {
    d3.select(this).attr('stroke', null);
  }

  const drag = d3
    .drag()
    .on('start', dragstarted)
    .on('drag', dragged)
    .on('end', dragended);
  return drag;
}
