import {createStore} from 'redux'
import Tile from './models/tile'
import Game from './game'

const DEFAULTSTATE = new Game(9, 9)

const board = (state = DEFAULTSTATE, action) => {
  switch (action.type) {
    case 'CLICK':
      let isLost = action.tile.isMine
      let tiles = updateTiles(state.tiles, action.tile.id)
      return {...state, tiles, isLost}
    default:
      return state
  }
}

const store = createStore(board);

export default store

function updateTiles(tileRows, newTileId) {
  return tileRows.map((tileRow) => {
    return tileRow.map((tile) => {
      if (tile.id === newTileId) {
        let newTile = new Tile(newTileId)
        newTile.markAsExposed()
        newTile.isMine = tile.isMine
        newTile.surroundingMines = tile.surroundingMines
        newTile.clearSurroundings = tile.clearSurroundings

        if (newTile.clearSurroundings) {
          exposeSurroundingTiles(newTileId, tileRows)
        }

        return newTile
      }
      else {
        return tile
      }
    })
  })
}

function exposeSurroundingTiles(newTileId, tileRows) {
  for (var i = 0; i < tileRows.length; i++) {
    for (var j = 0; j < tileRows[i].length; j++) {
      if (tileRows[i][j].id === newTileId) {
        j > 0 && tileRows[i][j - 1].markAsExposed()

        if (j > 0 && tileRows[i][j - 1].clearSurroundings) {
          exposeSurroundingTiles(tileRows[i][j - 1].id, tileRows)
        }

        j < tileRows[i].length - 1 && tileRows[i][j + 1].markAsExposed()

        if (j < tileRows[i].length - 1 && tileRows[i][j + 1].clearSurroundings) {
          exposeSurroundingTiles(tileRows[i][j + 1], tileRows)
        }

        i > 0 && tileRows[i - 1][j].markAsExposed()

        if (i > 0 && tileRows[i - 1][j].clearSurroundings) {
          exposeSurroundingTiles(tileRows[i - 1][j], tileRows)
        }

        i < tileRows.length - 1 && tileRows[i + 1][j].markAsExposed()

        if (i < tileRows.length - 1 && tileRows[i + 1][j].clearSurroundings) {
          exposeSurroundingTiles(tileRows[i + 1][j], tileRows)
        }

        i > 0 && j < tileRows[i].length - 1 && tileRows[i - 1][j + 1].markAsExposed()

        if (i > 0 && j < tileRows[i].length - 1 && tileRows[i - 1][j + 1].clearSurroundings) {
          exposeSurroundingTiles(tileRows[i - 1][j + 1], tileRows)
        }

        i > 0 && j > 0 && tileRows[i - 1][j - 1].markAsExposed()

        if (i > 0 && j > 0 && tileRows[i - 1][j - 1].clearSurroundings) {
          exposeSurroundingTiles(tileRows[i - 1][j - 1], tileRows)
        }

        i < tileRows.length - 1 && j < tileRows[i].length - 1 && tileRows[i + 1][j + 1].markAsExposed()

        if (i < tileRows.length - 1 && j < tileRows[i].length - 1 && tileRows[i + 1][j + 1].clearSurroundings) {
          exposeSurroundingTiles(tileRows[i + 1][j + 1], tileRows)
        }

        i < tileRows.length - 1 && j > 0 && tileRows[i + 1][j - 1].markAsExposed()

        if (i < tileRows.length - 1 && j > 0 && tileRows[i + 1][j - 1].clearSurroundings) {
          exposeSurroundingTiles(tileRows[i + 1][j - 1], tileRows)
        }

      }
    }
  }
}


