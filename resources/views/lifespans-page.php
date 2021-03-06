<?php use Fisharebest\Webtrees\Bootstrap4; ?>
<?php use Fisharebest\Webtrees\Functions\FunctionsEdit; ?>
<?php use Fisharebest\Webtrees\I18N; ?>

<h2 class="wt-page-title">
	<?= $title ?>
</h2>

<form class="wt-page-options wt-page-options-lifespans-chart d-print-none">
	<input type="hidden" name="route" value="lifespans">
	<input type="hidden" name="ged" value="<?= e($tree->getName()) ?>">

	<?php foreach ($xrefs as $xref): ?>
	<input name="xrefs[]" type="hidden" value="<?= e($xref) ?>">
	<?php endforeach ?>

	<div class="row form-group">
		<label class="col-sm-3 col-form-label wt-page-options-label" for="addxref">
			<?= I18N::translate('Add individuals') ?>
		</label>
		<div class="col-sm-9 wt-page-options-value">
			<?= FunctionsEdit::formControlIndividual(null, [
				'id'   => 'addxref',
				'name' => 'addxref',
			]) ?>

			<?= Bootstrap4::checkbox(/* I18N: Label for a configuration option */ I18N::translate('Include the individual’s immediate family'), false, ['name' => 'addfam']) ?>
		</div>
	</div>

	<div class="row form-group">
		<div class="col-sm-12 col-form-label wt-page-options-label">
			<?= I18N::translate('Select individuals by place or date ') ?>
		</div>
	</div>

	<div class="row form-group">
		<label class="col-sm-3 col-form-label wt-page-options-label" for="placename">
			<?= I18N::translate('Place ') ?>
		</label>
		<div class="col-sm-9 wt-page-options-value">
			<input class="form-control" id="placename" name="placename" type="text">
		</div>
	</div>

	<div class="row form-group">
		<div class="col-sm-3 col-form-label wt-page-options-label" for="start">
			<?= I18N::translate('Start year ') ?>
		</div>
		<div class="col-sm-9 wt-page-options-value">
			<input class="form-control" id="start" name="start" type="text">
		</div>
	</div>

	<div class="row form-group">
		<div class="col-sm-3 col-form-label wt-page-options-label" for="end-year">
			<?= I18N::translate('End year ') ?>
		</div>
		<div class="col-sm-9 wt-page-options-value">
			<input class="form-control" id="end" name="end" type="text">
		</div>
	</div>

	<div class="row form-group">
		<div class="col-form-label col-sm-3 wt-page-options-label"></div>
		<div class="col-sm-9 wt-page-options-value">
			<button type="submit" class="btn btn-primary" type="submit">
				<?= /* I18N: A button label. */ I18N::translate('add') ?>
			</button>
			<a class="btn btn-secondary" href="<?= e(route('lifespans', ['ged' => $tree->getName()])) ?>">
				<?= /* I18N: A button label. */ I18N::translate('reset') ?>
			</a>
		</div>
	</div>

</form>

<div class="wt-ajax-load wt-page-content wt-chart wt-timeline-chart" data-ajax-url="<?= e(route('lifespans-chart', ['ged' => $tree->getName(), 'xrefs' => $xrefs, 'subtitle' => $subtitle])) ?>"></div>
