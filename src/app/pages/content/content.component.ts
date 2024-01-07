import { Component, OnInit } from '@angular/core';
import { MenuBarComponent } from "../../components/menu-bar/menu-bar.component";
import { TitleComponent } from "../../components/title/title.component";
import { FooterComponent } from "../../components/footer/footer.component";
import { ActivatedRoute, RouterLink } from '@angular/router';
import { DataFake } from '../../data/data-fake';

@Component({
    selector: 'app-content',
    standalone: true,
    templateUrl: './content.component.html',
    styleUrl: './content.component.css',
    imports: [MenuBarComponent, TitleComponent, FooterComponent, RouterLink]
})
export class ContentComponent implements OnInit {


    constructor(private route : ActivatedRoute) {
        
    }

    ngOnInit(): void {
         this.route.paramMap.subscribe( (value) => { this.fillPage(Number(value.get("id"))) } )
    }

    photoCover: string = "";

    title: string = "";

    description: string = "";

    fillPage (value: number) {
        this.photoCover = DataFake[value].photo;
        this.title = DataFake[value].title;
        this.description = DataFake[value].description;
    }

}



