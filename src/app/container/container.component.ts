
import { Component, Input } from '@angular/core';

@Component({
    // tslint:disable-next-line:component-selector
    selector: 'container',
    templateUrl: './container.component.html'
})
export class ContainerComponent {
    @Input() model: { type: string, id: number, columns };
    @Input() list: any[];

    public isArray(object): boolean {
        return Array.isArray(object);
    }

    public removeItem(item: any, list: any[]): void {
        list.splice(list.indexOf(item), 1);
    }
}
