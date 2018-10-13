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

    isMobileMenu() {
        if ($(window).width() > 991) {
            return false;
        }
        return true;
    };
    ngAfterContentChecked(){
        if($(window).width() <= 991){
            this.width = '100%';
        }else{
            this.width = 'calc(100vw - 260px)';
        }
        if($(window).width < 700){
            this.position = '';
        }else{
            this.position = 'fixed';
        }
    }
}
