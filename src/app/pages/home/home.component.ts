import { Component } from '@angular/core';
import { TitleComponent } from "../../components/title/title.component";
import { BigCardComponent } from "../../components/big-card/big-card.component";
import { SmallCardComponent } from "../../components/small-card/small-card.component";
import { MenuBarComponent } from "../../components/menu-bar/menu-bar.component";
import { FooterComponent } from "../../components/footer/footer.component";
import { RouterLink } from '@angular/router';
import { DataFake } from '../../data/data-fake';

@Component({
    selector: 'app-home',
    standalone: true,
    templateUrl: './home.component.html',
    styleUrl: './home.component.css',
    imports: [TitleComponent, BigCardComponent, SmallCardComponent, MenuBarComponent, FooterComponent,RouterLink]
})
export class HomeComponent {
    DataFake: any[] = DataFake;
    defaultBorderColor: string = "#03A062";
}
