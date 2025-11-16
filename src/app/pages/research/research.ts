import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { researchExperience, publications, achievements, googleScholarProfile } from '../../data';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-research',
  styleUrl: './research.scss',
  templateUrl: './research.html',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [CommonModule],
})
export class Research {
  researchExperience = researchExperience;
  publications = publications;
  achievements = achievements;
  googleScholarProfile = googleScholarProfile;

  openGoogleScholar() {
    window.open(`https://scholar.google.com/citations?user=${this.googleScholarProfile}`, '_blank');
  }

  openDOI(doi: string) {
    // Remove "doi:" prefix if present
    const cleanDoi = doi.replace(/^doi:\s*/i, '');
    window.open(`https://doi.org/${cleanDoi}`, '_blank');
  }
}

