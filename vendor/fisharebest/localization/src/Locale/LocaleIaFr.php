<?php namespace Fisharebest\Localization;

/**
 * Class LocaleIaFr
 *
 * @author        Greg Roach <fisharebest@gmail.com>
 * @copyright (c) 2015 Greg Roach
 * @license       GPLv3+
 */
class LocaleIaFr extends LocaleIa {
	/** {@inheritdoc} */
	public function territory() {
		return new TerritoryFr;
	}
}