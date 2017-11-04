import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  rows: Array<{
    index: number,
    age: number,
    name: string,
    gender: string,
    company: string
  }>;

  females: Array<{
    index: number,
    age: number,
    name: string,
    gender: string,
    company: string
  }>;

  selectedButton: number;

  constructor() { }

  ngOnInit() {
    /* tslint:disable */
    this.rows = [{ 'index': 0, 'age': 41, 'name': 'Martha Cherry', 'gender': 'female', 'company': 'METROZ' }, { 'index': 1, 'age': 24, 'name': 'Mcbride Curry', 'gender': 'male', 'company': 'ZOGAK' }, { 'index': 2, 'age': 42, 'name': 'Chaney Clements', 'gender': 'male', 'company': 'ONTAGENE' }, { 'index': 3, 'age': 33, 'name': 'Nellie Miranda', 'gender': 'female', 'company': 'NETROPIC' }, { 'index': 4, 'age': 39, 'name': 'Harper Kline', 'gender': 'male', 'company': 'LYRIA' }, { 'index': 5, 'age': 41, 'name': 'Marguerite Sears', 'gender': 'female', 'company': 'MATRIXITY' }, { 'index': 6, 'age': 44, 'name': 'Lorene Cervantes', 'gender': 'female', 'company': 'ISOLOGIX' }, { 'index': 7, 'age': 25, 'name': 'Parsons Vazquez', 'gender': 'male', 'company': 'ZEPITOPE' }, { 'index': 8, 'age': 25, 'name': 'Bruce Mcintyre', 'gender': 'male', 'company': 'ACCRUEX' }, { 'index': 9, 'age': 39, 'name': 'Beach Holder', 'gender': 'male', 'company': 'RUGSTARS' }, { 'index': 10, 'age': 22, 'name': 'Katrina Lambert', 'gender': 'female', 'company': 'ZAPHIRE' }, { 'index': 11, 'age': 29, 'name': 'Emilia Diaz', 'gender': 'female', 'company': 'SULTRAX' }, { 'index': 12, 'age': 26, 'name': 'Carney Cline', 'gender': 'male', 'company': 'SONIQUE' }, { 'index': 13, 'age': 45, 'name': 'Olsen Valenzuela', 'gender': 'male', 'company': 'OPPORTECH' }, { 'index': 14, 'age': 25, 'name': 'Bray Fleming', 'gender': 'male', 'company': 'SOLGAN' }, { 'index': 15, 'age': 38, 'name': 'Enid Slater', 'gender': 'female', 'company': 'SPEEDBOLT' }, { 'index': 16, 'age': 45, 'name': 'Camille Combs', 'gender': 'female', 'company': 'PEARLESEX' }, { 'index': 17, 'age': 26, 'name': 'Beard Lane', 'gender': 'male', 'company': 'ESCHOIR' }, { 'index': 18, 'age': 33, 'name': 'Carrillo Wolfe', 'gender': 'male', 'company': 'EMPIRICA' }, { 'index': 19, 'age': 30, 'name': 'Lorie Wilkerson', 'gender': 'female', 'company': 'ROBOID' }, { 'index': 20, 'age': 36, 'name': 'Daisy Estes', 'gender': 'female', 'company': 'ORBIXTAR' }, { 'index': 21, 'age': 41, 'name': 'Jennifer Merrill', 'gender': 'female', 'company': 'REPETWIRE' }, { 'index': 22, 'age': 43, 'name': 'Gay Munoz', 'gender': 'female', 'company': 'HOUSEDOWN' }, { 'index': 23, 'age': 43, 'name': 'Mccray Forbes', 'gender': 'male', 'company': 'MULTRON' }, { 'index': 24, 'age': 49, 'name': 'Diann Roy', 'gender': 'female', 'company': 'LIMAGE' }, { 'index': 25, 'age': 38, 'name': 'Marie Rocha', 'gender': 'female', 'company': 'KOG' }, { 'index': 26, 'age': 46, 'name': 'Dianna Mccall', 'gender': 'female', 'company': 'COREPAN' }, { 'index': 27, 'age': 30, 'name': 'Hopper Marks', 'gender': 'male', 'company': 'RODEMCO' }, { 'index': 28, 'age': 36, 'name': 'Hendricks Olson', 'gender': 'male', 'company': 'MICRONAUT' }, { 'index': 29, 'age': 50, 'name': 'Conrad Mclean', 'gender': 'male', 'company': 'EMTRAK' }, { 'index': 30, 'age': 47, 'name': 'Robertson Dyer', 'gender': 'male', 'company': 'INCUBUS' }, { 'index': 31, 'age': 48, 'name': 'Wanda Sweet', 'gender': 'female', 'company': 'CUIZINE' }, { 'index': 32, 'age': 21, 'name': 'Vasquez Barnes', 'gender': 'male', 'company': 'GINKLE' }, { 'index': 33, 'age': 36, 'name': 'Ida Schmidt', 'gender': 'female', 'company': 'EXOSPACE' }, { 'index': 34, 'age': 36, 'name': 'Bradford Anderson', 'gender': 'male', 'company': 'ENERVATE' }, { 'index': 35, 'age': 49, 'name': 'Madge Shepherd', 'gender': 'female', 'company': 'ACCUPHARM' }, { 'index': 36, 'age': 21, 'name': 'Ericka Snow', 'gender': 'female', 'company': 'STRALUM' }, { 'index': 37, 'age': 39, 'name': 'Manuela Buckner', 'gender': 'female', 'company': 'QUADEEBO' }, { 'index': 38, 'age': 26, 'name': 'Bennett Aguirre', 'gender': 'male', 'company': 'UNIA' }, { 'index': 39, 'age': 39, 'name': 'Sanford Padilla', 'gender': 'male', 'company': 'GEOSTELE' }, { 'index': 40, 'age': 36, 'name': 'Frances Nicholson', 'gender': 'female', 'company': 'PROTODYNE' }, { 'index': 41, 'age': 33, 'name': 'Berger Green', 'gender': 'male', 'company': 'ROTODYNE' }, { 'index': 42, 'age': 42, 'name': 'Edna Hodge', 'gender': 'female', 'company': 'ENERSAVE' }, { 'index': 43, 'age': 27, 'name': 'Taylor Newton', 'gender': 'female', 'company': 'TECHMANIA' }, { 'index': 44, 'age': 42, 'name': 'Charlotte Robinson', 'gender': 'female', 'company': 'ENQUILITY' }, { 'index': 45, 'age': 41, 'name': 'Josefina Stokes', 'gender': 'female', 'company': 'EGYPTO' }, { 'index': 46, 'age': 46, 'name': 'Nolan Petersen', 'gender': 'male', 'company': 'VISALIA' }, { 'index': 47, 'age': 23, 'name': 'Violet Carney', 'gender': 'female', 'company': 'LIQUIDOC' }, { 'index': 48, 'age': 43, 'name': 'Rios Bender', 'gender': 'male', 'company': 'ENERSOL' }, { 'index': 49, 'age': 45, 'name': 'Randolph Shields', 'gender': 'male', 'company': 'VENDBLEND' }, { 'index': 50, 'age': 43, 'name': 'Simone Adkins', 'gender': 'female', 'company': 'ZOARERE' }, { 'index': 51, 'age': 23, 'name': 'Christina Kirkland', 'gender': 'female', 'company': 'COSMETEX' }, { 'index': 52, 'age': 43, 'name': 'Joann Vinson', 'gender': 'female', 'company': 'MUSIX' }, { 'index': 53, 'age': 39, 'name': 'Ford Calderon', 'gender': 'male', 'company': 'VURBO' }, { 'index': 54, 'age': 35, 'name': 'Stein Hayden', 'gender': 'male', 'company': 'TECHADE' }, { 'index': 55, 'age': 37, 'name': 'Staci Moses', 'gender': 'female', 'company': 'EQUICOM' }, { 'index': 56, 'age': 38, 'name': 'Warren Harvey', 'gender': 'male', 'company': 'YURTURE' }, { 'index': 57, 'age': 29, 'name': 'Keller Vasquez', 'gender': 'male', 'company': 'ZAPPIX' }, { 'index': 58, 'age': 21, 'name': 'Chandra Underwood', 'gender': 'female', 'company': 'LINGOAGE' }, { 'index': 59, 'age': 49, 'name': 'Greene Sosa', 'gender': 'male', 'company': 'PAPRICUT' }, { 'index': 60, 'age': 30, 'name': 'Marjorie Vaughn', 'gender': 'female', 'company': 'SNACKTION' }, { 'index': 61, 'age': 41, 'name': 'Selma Beasley', 'gender': 'female', 'company': 'JOVIOLD' }, { 'index': 62, 'age': 28, 'name': 'Salas Snyder', 'gender': 'male', 'company': 'ISOLOGICA' }, { 'index': 63, 'age': 29, 'name': 'Kim Glover', 'gender': 'female', 'company': 'BUZZMAKER' }, { 'index': 64, 'age': 23, 'name': 'Regina Mcguire', 'gender': 'female', 'company': 'ZENOLUX' }, { 'index': 65, 'age': 44, 'name': 'Fuller Lawrence', 'gender': 'male', 'company': 'SEALOUD' }, { 'index': 66, 'age': 36, 'name': 'Durham Sims', 'gender': 'male', 'company': 'OVERFORK' }, { 'index': 67, 'age': 28, 'name': 'Gloria Larson', 'gender': 'female', 'company': 'FLEETMIX' }, { 'index': 68, 'age': 32, 'name': 'Pollard Cooke', 'gender': 'male', 'company': 'SURELOGIC' }, { 'index': 69, 'age': 25, 'name': 'Lynn Crane', 'gender': 'female', 'company': 'EQUITOX' }, { 'index': 70, 'age': 21, 'name': 'Yvette Burt', 'gender': 'female', 'company': 'ENDIPIN' }, { 'index': 71, 'age': 45, 'name': 'Cherry Mcintosh', 'gender': 'male', 'company': 'AVENETRO' }, { 'index': 72, 'age': 22, 'name': 'Mamie Walton', 'gender': 'female', 'company': 'HANDSHAKE' }, { 'index': 73, 'age': 33, 'name': 'Mona Burks', 'gender': 'female', 'company': 'DIGIQUE' }, { 'index': 74, 'age': 28, 'name': 'Shelley Raymond', 'gender': 'female', 'company': 'NETAGY' }, { 'index': 75, 'age': 20, 'name': 'Margret Eaton', 'gender': 'female', 'company': 'XURBAN' }, { 'index': 76, 'age': 32, 'name': 'Maritza Carey', 'gender': 'female', 'company': 'PRISMATIC' }, { 'index': 77, 'age': 38, 'name': 'Lawson Clayton', 'gender': 'male', 'company': 'ZOID' }, { 'index': 78, 'age': 33, 'name': 'Noble Paul', 'gender': 'male', 'company': 'DATAGEN' }, { 'index': 79, 'age': 37, 'name': 'Berg Reeves', 'gender': 'male', 'company': 'ZENCO' }, { 'index': 80, 'age': 39, 'name': 'Snow Wade', 'gender': 'male', 'company': 'ELECTONIC' }, { 'index': 81, 'age': 49, 'name': 'Joy Dale', 'gender': 'female', 'company': 'PETICULAR' }, { 'index': 82, 'age': 21, 'name': 'Paulette Kramer', 'gender': 'female', 'company': 'DIGIAL' }, { 'index': 83, 'age': 44, 'name': 'Alana Schroeder', 'gender': 'female', 'company': 'GOKO' }, { 'index': 84, 'age': 26, 'name': 'Kay Pitts', 'gender': 'female', 'company': 'KENGEN' }, { 'index': 85, 'age': 36, 'name': 'Sandy Mckenzie', 'gender': 'female', 'company': 'HAWKSTER' }, { 'index': 86, 'age': 25, 'name': 'Arlene Reynolds', 'gender': 'female', 'company': 'ACCIDENCY' }, { 'index': 87, 'age': 48, 'name': 'Nixon Cardenas', 'gender': 'male', 'company': 'VICON' }, { 'index': 88, 'age': 50, 'name': 'Sykes Mccarthy', 'gender': 'male', 'company': 'SUPPORTAL' }, { 'index': 89, 'age': 32, 'name': 'Ward Swanson', 'gender': 'male', 'company': 'TASMANIA' }, { 'index': 90, 'age': 29, 'name': 'Gwendolyn Skinner', 'gender': 'female', 'company': 'ZAGGLE' }, { 'index': 91, 'age': 22, 'name': 'Hahn Weaver', 'gender': 'male', 'company': 'COMBOT' }, { 'index': 92, 'age': 32, 'name': 'Annmarie Pearson', 'gender': 'female', 'company': 'XYLAR' }, { 'index': 93, 'age': 26, 'name': 'Bernice Ballard', 'gender': 'female', 'company': 'NEWCUBE' }, { 'index': 94, 'age': 32, 'name': 'Young Dudley', 'gender': 'female', 'company': 'ZILPHUR' }, { 'index': 95, 'age': 26, 'name': 'Bowen Hanson', 'gender': 'male', 'company': 'MIRACULA' }, { 'index': 96, 'age': 41, 'name': 'Pearl Mckee', 'gender': 'female', 'company': 'REMOLD' }, { 'index': 97, 'age': 29, 'name': 'Yang Dodson', 'gender': 'male', 'company': 'VOLAX' }, { 'index': 98, 'age': 46, 'name': 'Day Cook', 'gender': 'male', 'company': 'MAXIMIND' }, { 'index': 99, 'age': 35, 'name': 'Mcclain Wright', 'gender': 'male', 'company': 'ZENTRY' }];
    /* tslint:enable */

    this.getFemales();

    this.selectedButton = -1;
  }

  getFemales() {
    this.females = this.rows.filter((x) => {
      return x.gender === 'female';
    });
    // console.log(this.females);
  }

  onCollapseActions(index: number) {
    if (this.selectedButton === index) {
      this.selectedButton = -1;
    } else {
      this.selectedButton = index;
    }
    console.log(this.selectedButton);
  }

  onEdit(index: number) {
    const row = this.rows.filter((x) => {
      return x.index === index;
    });
    console.log(row);
  }

}
