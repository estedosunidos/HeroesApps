import { FormControl, FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Hero, Publisher } from '../../interface/heroes.interfaces';
import { HeroesService } from '../../service/heroes.service';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmDialogComponent } from '../../components/confirmDialog/confirmDialog.component';
import { AuthService } from '../../../auth/auth/service/auth.service';

@Component({
  selector: 'app-newPage',
  templateUrl: './newPage.component.html',
  styleUrls: ['./newPage.component.css']
})
export class NewPageComponent implements OnInit {
  public heroForm = new FormGroup({
    id: new FormControl(''),
    superhero: new FormControl('', { nonNullable: true }),
    publisher: new FormControl<Publisher>(Publisher.DCComics),
    alter_ego: new FormControl(''),
    first_appearance: new FormControl(''),
    characters: new FormControl(''),
    alt_img: new FormControl('')
  })

  public Publisher = [
    { id: 'DC Comics', desc: 'DC-Comics' },
    { id: 'Marvel Comics', desc: 'Marvel-Comics' },
  ]
  constructor(
    private hero: HeroesService,
    private ActivatedRoute: ActivatedRoute,
    private router: Router,
    private snackBar: MatSnackBar,
    private dialogo: MatDialog,

    ) { }
  get currentHero(): Hero {
    const hero = this.heroForm.value as Hero
    return hero;
  }
  ngOnInit() {
    if (!this.router.url.includes('edit')) return
    this.ActivatedRoute.params.pipe(switchMap(({ id }) => this.hero.getHeroById(id))).subscribe(hero => {
      if (!hero) return this.router.navigateByUrl('/')
      this.heroForm.reset(hero)
      return
    })

  }
  onSubmit(): void {
    if (this.heroForm.invalid) return
    if (this.currentHero.id) {
      this.hero.UpdateHero(this.currentHero).subscribe(hero => {
        this.snackBar.open(`Heroe ${this.currentHero.superhero} updated!`, 'Close', { duration: 2000 })

      }
      )
      return
    }
    this.hero.addHero(this.currentHero).subscribe(hero => {//TODOSmostrar snackbar, y navegar /heroes/edit/hero.id
      this.router.navigateByUrl('/heroes/edit/' + hero.id)
      this.snackBar.open(`Heroe ${this.currentHero.superhero} created!`, 'Close', { duration: 2000 })


    })

  }
  onDeleteHero() {
    if (!this.currentHero.id) return Error('Heo id not found')
    const dialogRef = this.dialogo.open(ConfirmDialogComponent, {
      data: this.heroForm.value
    })
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed')
      console.log({ result })
      if(!result)return
      this.hero.DeleteHero(this.currentHero.id).subscribe(hero => {
        this.snackBar.open(`Heroe ${this.currentHero.superhero} deleted!`, 'Close', { duration: 2000 })
        this.router.navigateByUrl('/heroes')
      })
    })
    return
  }
  snowSnackbar(message: string) {
    this.snackBar.open(message, 'done', {
      duration: 2500
    })
  }

}
