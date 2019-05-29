import { TestBed, inject } from '@angular/core/testing';

import { ChildComponent } from './child.component';

describe('a child component', () => {
	let component: ChildComponent;

	// register all needed dependencies
	beforeEach(() => {
		TestBed.configureTestingModule({
			providers: [
				ChildComponent
			]
		});
	});

	// instantiation through framework injection
	beforeEach(inject([ChildComponent], (ChildComponent) => {
		component = ChildComponent;
	}));

	it('should have an instance', () => {
		expect(component).toBeDefined();
	});
});