import * as React from "react";
import clsx from "clsx";

import {Card, CardContent, createStyles, Grid, Theme, withStyles} from "@material-ui/core";

import {SDT} from "../../data/const";
import {SceneSettings} from "../../data/Config";
import Scene from "../../data/Scene";
import CrossFadeCard from "../configGroups/CrossFadeCard";
import StrobeCard from "../configGroups/StrobeCard";
import ZoomMoveCard from "../configGroups/ZoomMoveCard";

const styles = (theme: Theme) => createStyles({
  backdropTop: {
    zIndex: theme.zIndex.modal + 1,
  },
  highlight: {
    borderWidth: 2,
    borderColor: theme.palette.secondary.main,
    borderStyle: 'solid',
  },
  disable: {
    pointerEvents: 'none',
  }
});

class SceneEffects extends React.Component {
  readonly props: {
    classes: any,
    scene: Scene | SceneSettings,
    tutorial: string,
    onUpdateScene(scene: Scene | SceneSettings, fn: (scene: Scene | SceneSettings) => void): void,
  };

  render() {
    const classes = this.props.classes;
    const tutorialZoom = this.props.tutorial == SDT.zoom1 ||
      this.props.tutorial == SDT.zoom2 ||
      this.props.tutorial == SDT.zoom3 ||
      this.props.tutorial == SDT.zoom4;
    const tutorialFade = this.props.tutorial == SDT.fade1 ||
      this.props.tutorial == SDT.fade2;
    return(
      <Grid container spacing={2}>
        <Grid item xs={12} md={6} lg={4} className={clsx(tutorialZoom && classes.backdropTop)}>
          <Card>
            <CardContent>
              <ZoomMoveCard
                scene={this.props.scene}
                tutorial={this.props.tutorial}
                onUpdateScene={this.props.onUpdateScene.bind(this)}/>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} md={6} lg={4} className={clsx(tutorialFade && classes.backdropTop)}>
          <Card>
            <CardContent>
              <CrossFadeCard
                scene={this.props.scene}
                tutorial={this.props.tutorial}
                onUpdateScene={this.props.onUpdateScene.bind(this)}/>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} md={6} lg={4}>
          <Card>
            <CardContent>
              <StrobeCard
                scene={this.props.scene}
                onUpdateScene={this.props.onUpdateScene.bind(this)}/>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    );
  }

  nop() {}
}

export default withStyles(styles)(SceneEffects as any);