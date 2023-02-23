import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-audio',
  templateUrl: './audio.component.html',
  styleUrls: ['./audio.component.css']
})
export class AudioComponent {
  audios: any = [];
  audioList = [
    {
      url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
      title: "Smaple 1",
      cover: "https://i1.sndcdn.com/artworks-000249294066-uow7s0-t500x500.jpg"
    },
    {
      url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-10.mp3",
      title: "Sample 2",
      cover: "https://i1.sndcdn.com/artworks-000249294066-uow7s0-t500x500.jpg"
    },
    {
      url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-12.mp3",
      title: "Sample 3",
      cover: "https://i1.sndcdn.com/artworks-000249294066-uow7s0-t500x500.jpg"
    }
  ];
  constructor(private http: HttpClient) {
    this.http
      .get("https://34.205.54.79/api/usuario/audios", {}).subscribe((res: any) => {
        console.log(res);

        this.audios = res;

      })
  }
/*    media(multimediaAll: any):{
    let newArray: any = [];


    return new Promise((resolve:any, reject:any) => {
      newArray.forEach(async (element: any, index: any, array: any) => {
        newArray.push({
          url: "https://34.205.54.79/api/usuario/audio/" + element.nombre_archivo,
          title: "Smaple 1", cover: "https://i1.sndcdn.com/artworks-000249294066-uow7s0-t500x500.jpg"
        })
        if (index === array.length - 1) setTimeout(() => {
          resolve(newArray);
        }, 1000);
      });
    });













  } */
}
