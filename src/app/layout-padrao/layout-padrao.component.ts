import { Component } from '@angular/core';
import { MenuComponent } from "../menu/menu.component";
import { ActivatedRoute, NavigationEnd, Router, RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-layout-padrao',
  standalone: true,
  imports: [MenuComponent, RouterOutlet],
  templateUrl: './layout-padrao.component.html',
  styleUrl: './layout-padrao.component.scss'
})
export class LayoutPadraoComponent {

  public tituloPagina: string = '';

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.setTituloPagina();
      }
    });

    this.setTituloPagina();
  }

  private setTituloPagina() {
    const route = this.activatedRoute.firstChild;
    if (route && route.snapshot.title) {
      this.tituloPagina = route.snapshot.title;
    }
  }
}
