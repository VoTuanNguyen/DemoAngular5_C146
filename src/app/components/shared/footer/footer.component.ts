import { Component, AfterContentChecked } from '@angular/core';

declare var $:any;

@Component({
    selector: 'footer-cmp',
    templateUrl: 'footer.component.html'
})

export class FooterComponent implements AfterContentChecked{
    test : Date = new Date();
    position = 'fixed';
    bottom = '0px';
    width = 'calc(100vw - 260px)';
    
    ngAfterContentChecked(){
        if($(window).width() <= 991){
            this.width = '100%';
            this.position = '';
        }else{
            this.width = 'calc(100vw - 260px)';
            this.position = 'fixed';
        }
    }
}
