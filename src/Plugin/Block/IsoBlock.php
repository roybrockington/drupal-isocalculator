<?php

namespace Drupal\isocalculator\Plugin\Block;

use Drupal\Core\Block\BlockBase;

/**
 * Provides an IsoAcoustics product calculator launch block.
 *
 * @Block(
 * id = "isocalculator",
 * admin_label = @Translation("Product Calculator")
 * )
 */

class IsoBlock extends BlockBase {
  /**
   * {@inheritdoc}
   */
  public function build() {
    return [
      '#attached'=> ['library' => ['isocalculator/isocalculator']],
      '#type' => 'inline_template',
      '#template' => '
        <div class="bg-iso text-white fs-4 my-2 rounded p-3 d-flex justify-content-between">
          <div class="d-flex align-items-start flex-column">
            Unsure which IsoAcoustics product to choose?
            <span class="fs-6">Try our product calculator to find your perfect match!</span>
          </div>
          <div class="d-flex align-items-center mx-2">
            <button class="iso_start_button btn btn-light d-flex align-items-center fs-6" id="fireFrame">
              <span class="material-icons mx-1 text-muted">calculate</span>
              Calculator
            </button>
          </div>
          <div class="iso_overlay d-none" id="iso_overlay"><div class="iso_content"><button class="iso_close btn btn-light" id="close_button">X</button><iframe id="isoacoustics-iframe" src="https://calculator.isoacoustics.com/" scrolling="yes" style="height: 0px;"></iframe></div></div>
        </div>'
    ];
  }
}
