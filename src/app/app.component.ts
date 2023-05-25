import { Component, OnInit } from "@angular/core";
import { Survey } from "../types/Survey";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent implements OnInit {
  statuses: string[] = ["All", "Active", "Completed"];
  categories: string[] = ["Development", "Workplace", "Hardware"];
  filteredList: Survey[];

  filteredStatus: string = "";
  filteredCategories: string = "";

  status = "status";
  category = "category";

  surveyList: Survey[] = [
    {
      title: "Designer Survey",
      category: "Workplace",
      status: "Active",
      label: "New Framework",
    },
    {
      title: "Developer Survey",
      category: "Development",
      status: "Active",
      label: "Education",
    },
    {
      title: "Backend Survey",
      category: "Hardware",
      status: "Completed",
      label: "Personal",
    },
    {
      title: "QA Survey",
      category: "Workplace",
      status: "Active",
      label: "Quality Assurance",
    },
    {
      title: "Frontend Survey",
      category: "Development",
      status: "Completed",
      label: "User Interface",
    },
    {
      title: "IT Survey",
      category: "Hardware",
      status: "Active",
      label: "Technology",
    },
    {
      title: "Manager Survey",
      category: "Workplace",
      status: "Completed",
      label: "Leadership",
    },
    {
      title: "Security Survey",
      category: "Hardware",
      status: "Active",
      label: "Cybersecurity",
    },
    {
      title: "Data Analysis Survey",
      category: "Development",
      status: "All",
      label: "Data Insights",
    },
    {
      title: "UI/UX Survey",
      category: "Workplace",
      status: "Completed",
      label: "User Experience",
    },
  ];

  ngOnInit() {
    this.filteredList = this.surveyList;
  }

  onFilterSelected(filter: string, type: string) {
    type === "status"
      ? (this.filteredStatus = filter)
      : (this.filteredCategories = filter);

    this.filteredList = this.surveyList.filter((survey: Survey) => {
      if (this.filteredStatus === "All" || this.filteredStatus === "" ) return survey;
      else {
        return survey.status === this.filteredStatus;
      }
    }).filter((survey: Survey) => {
      if (this.filteredCategories === "") return survey;
      else {
        return survey.category === this.filteredCategories;
      }
    })
  }
}
