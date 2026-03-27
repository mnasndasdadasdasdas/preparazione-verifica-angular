import { Component } from '@angular/core';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css']
})
export class ContainerComponent {

  macchine: string[] = [
    'Escavatore',
    'Bulldozer',
    'Gru',
    'Pala meccanica',
    'Rullo compressore',
    'Betoniera',
    'Trivella',
    'Dumper',
    'Livellatrice',
    'Fresatrice stradale'
  ];

}