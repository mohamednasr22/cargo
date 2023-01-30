import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ReceiverComponent } from '../../../shared/component/receiver/receiver.component';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { MatTableDataSource } from '@angular/material/table';
import {map, startWith} from 'rxjs/operators';


export interface User {
  name: string;
}


export interface ShipperElement {
  id: string;
  name: string;
  phone: string;
  email: string;
  address: string;
  einno:string;
};

export interface DestinationElement {
  id: string;
  name: string;
  address: string;
};




@Component({
  selector: 'app-createshipments',
  templateUrl: './createshipments.component.html',
  styleUrls: ['./createshipments.component.scss']
})
export class CreateshipmentsComponent implements OnInit {
  packages = [];
  newDestination:boolean = false;
  newShipper:boolean = false;
  newReceiver:boolean = false;
  shippers:FormControl = new FormControl();
  receivers:FormControl = new FormControl();
  destinations:FormControl = new FormControl();

  selectedShipper:ShipperElement = {
    id: '',
    name : '',
    phone:'',
    email:'',
    address:'',
    einno:''
  };

  selectedReceiver:ShipperElement = {
    id: '',
    name : '',
    phone:'',
    email:'',
    address:'',
    einno:''
  };

  shippers_list: ShipperElement[] = [
    {
      id: '0001',
      name : 'Mohamed Ahmed',
      phone:'01020004455',
      email:'first@domain.com',
      address:'22 First Square',
      einno:'FD44SS2990'

    },
    {
      id: '0002',
      name : 'Hazem Emam',
      phone:'01020394455',
      email:'second@domain.com',
      address:'22 First Square',
      einno:'FDRTDSO990'

    },
    {
      id: '0003',
      name : 'Mohamed Salah',
      phone:'01020004455',
      email:'third@domain.com',
      address:'33 First Square',
      einno:'DED44SO990'
    },
    {
      id: '0004',
      name : 'Mahmoud Ibrahim',
      phone:'01020004987',
      email:'second@domain.com',
      address:'44 First Square',
      einno:'DED44SO920'
    },
    {
      id: '0005',
      name : 'Ahmed Ali',
      phone:'01020004001',
      email:'fifth@domain.com',
      address:'55 First Square',
      einno:'DED44SO320'
    }
  ];

  receivers_list: ShipperElement[] = [
    {
      id: '0001',
      name : 'Mohamed Ahmed',
      phone:'01020004455',
      email:'first@domain.com',
      address:'22 First Square',
      einno:'FD44SS2990'

    },
    {
      id: '0002',
      name : 'Hazem Emam',
      phone:'01020394455',
      email:'second@domain.com',
      address:'22 First Square',
      einno:'FDRTDSO990'

    },
    {
      id: '0003',
      name : 'Mohamed Salah',
      phone:'01020004455',
      email:'third@domain.com',
      address:'33 First Square',
      einno:'DED44SO990'
    },
    {
      id: '0004',
      name : 'Mahmoud Ibrahim',
      phone:'01020004987',
      email:'second@domain.com',
      address:'44 First Square',
      einno:'DED44SO920'
    },
    {
      id: '0005',
      name : 'Ahmed Ali',
      phone:'01020004001',
      email:'fifth@domain.com',
      address:'55 First Square',
      einno:'DED44SO320'
    }
  ];

  destinations_list: DestinationElement[] = [
    {
      id: '1',
      name : 'Aqaba Jordan',
      address:'22 First Square'

    },
    {
      id: '2',
      name : 'Jabal ali UAE',
      address:'22 First Square'

    },
    {
      id: '3',
      name : 'Umm Qasr Iraq',
      address:'33 First Square'
    },
    {
      id: '4',
      name : 'Mersin Turkey',
      address:'44 First Square'
    },
    {
      id: '5',
      name : 'Dammam Saudia Arabia',
      address:'55 First Square'
    },
    {
      id: '6',
      name : 'Jeddah Saudia Arabia',
      address:'55 First Square'
    },
    {
      id: '7',
      name : 'Bahrain Bahrain',
      address:'55 First Square'
    },
    {
      id: '8',
      name : 'Doha Qatar',
      address:'55 First Square'
    },
    {
      id: '9',
      name : 'Kuwait Kuwait',
      address:'55 First Square'
    },
    {
      id: '10',
      name : 'Muscat Oman',
      address:'55 First Square'
    },
    {
      id: '11',
      name : 'Beirut Lebanon',
      address:'55 First Square'
    },
    {
      id: '12',
      name : 'Port said Egypt',
      address:'55 First Square'
    }
  ];

  filteredOptions: Observable<ShipperElement[]>;
  filteredOptions2: Observable<ShipperElement[]>;
  filteredOptions3: Observable<DestinationElement[]>;

  dataSource = new MatTableDataSource<ShipperElement>(this.shippers_list);
  dataSource2 = new MatTableDataSource<ShipperElement>(this.receivers_list);

  constructor(public dialog: MatDialog) {

  }

  addPackage($val){
    this.packages.push($val);
  }



  ngOnInit(): void {

    this.filteredOptions = this.shippers.valueChanges
    .pipe(
      startWith(''),
      map(value => typeof value === 'string' ? value : value.name),
      map(name => name ? this._filter(name) : this.shippers_list.slice())
    );

    this.filteredOptions2 = this.receivers.valueChanges
    .pipe(
      startWith(''),
      map(value => typeof value === 'string' ? value : value.name),
      map(name => name ? this._filter2(name) : this.receivers_list.slice())
    );

    this.filteredOptions3 = this.destinations.valueChanges
    .pipe(
      startWith(''),
      map(value => typeof value === 'string' ? value : value.name),
      map(name => name ? this._filter3(name) : this.destinations_list.slice())
    );
  }


  displayFn(user: ShipperElement): string {
    return user && user.name ? user.name : '';
  }

  display3Fn(user: DestinationElement): string {
    return user && user.name ? user.name : '';
  }

  onSelectionChanged($event):any{
    this.selectedShipper = $event.option.value;
  }

  onSelection2Changed($event):any{
    this.selectedReceiver = $event.option.value;
  }


  private _filter(name: string): ShipperElement[] {
    const filterValue = name.toLowerCase();

    return this.shippers_list.filter(option => option.name.toLowerCase().indexOf(filterValue) === 0);
  }

  private _filter2(name: string): ShipperElement[] {
    const filterValue = name.toLowerCase();

    return this.receivers_list.filter(option => option.name.toLowerCase().indexOf(filterValue) === 0);
  }

  private _filter3(name: string): DestinationElement[] {
    const filterValue = name.toLowerCase();

    return this.destinations_list.filter(option => option.name.toLowerCase().indexOf(filterValue) === 0);
  }


  openReceiverDialog(): void {
    const dialogRef = this.dialog.open(ReceiverComponent, {
      width: '450px'
    });

    dialogRef.afterClosed().subscribe(result => {

    });
  }

}
