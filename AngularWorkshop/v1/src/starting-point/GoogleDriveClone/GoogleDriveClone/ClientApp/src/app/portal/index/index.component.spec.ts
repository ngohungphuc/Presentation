import { TestBed, inject } from '@angular/core/testing';

import { IndexComponent } from './index.component';

describe('a index component', () => {
	let component: IndexComponent;

	// register all needed dependencies
	beforeEach(() => {
		TestBed.configureTestingModule({
			providers: [
				IndexComponent
			]
		});
	});

	// instantiation through framework injection
	beforeEach(inject([IndexComponent], (IndexComponent) => {
		component = IndexComponent;
	}));

	it('should have an instance', () => {
		expect(component).toBeDefined();
	});
});