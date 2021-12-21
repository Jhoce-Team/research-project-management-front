import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import { Link } from "react-router-dom";
import image from "../images/projectImage.jpg";

const ProjectCard = ({
  projectKey,
  projectName,
  projectShortDescription,
  projectLink,
  startDate,
  endDate,
  phase,
  leader,
}) => {
  return (
    <div
      key={projectKey}
      className="flex justify-center items-center my-4 mx-2"
    >
      <Link to={projectLink}>
        <Card sx={{ maxWidth: 345 }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="140"
              image={image}
              alt="Imagen del proyecto"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {projectName}
              </Typography>
              <div variant="body2" color="text.secondary">
                <div className="w-full grid grid-cols-2 gap-2">
                  <div className="col-span-2">{projectShortDescription}</div>
                  <div className="">
                    <b>Inicio: </b>
                    {startDate}
                  </div>
                  <div className="w-full flex justify-end">
                    <b>Fin: </b>
                    {endDate}
                  </div>
                  <div>
                    <b>Fase: </b>
                    {phase}
                  </div>
                  <div className="w-full flex justify-end">
                    <b>Lider: </b>
                    {leader}
                  </div>
                </div>
              </div>
            </CardContent>
          </CardActionArea>
        </Card>
      </Link>
    </div>
  );
};

export default ProjectCard;
