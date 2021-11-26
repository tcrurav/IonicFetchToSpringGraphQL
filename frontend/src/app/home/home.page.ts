import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor() { 
    this.getBicycles();
  }

  getBicycles() {
    console.log("hola")
    fetch('http://localhost:8080/graphql', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        query: `
                query {
                  bicycles {
                    brand,
                    model
                  }
                }`
      }),
    })
      .then(res => res.json())
      .then(res => console.log(res.data));
  }

}
